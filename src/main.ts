import { HttpAdapterHost, NestFactory, PartialGraphHost } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { documentSwagger } from './infrastructure/common/swagger/swagger';
import compression from '@fastify/compress';
import helmet from '@fastify/helmet';
import { AllExceptionFilters } from './infrastructure/common/exception-filters-middleware/all-exception-filters.middleware';
import { LoggerInterceptor } from './infrastructure/common/interceptors/logger.interceptor';
import { ResponseInterceptor } from './infrastructure/common/interceptors/response.interceptor';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilters(httpAdapter));
  app.useGlobalInterceptors(
    new LoggerInterceptor(new LoggerService()),
    new ResponseInterceptor(),
  );

  await app.register(compression);
  await app.register(helmet);
  documentSwagger(app);
  await app.listen(3000);
}
bootstrap();
