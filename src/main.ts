import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { documentSwagger } from './infrastructure/common/swagger/swagger';
import compression from '@fastify/compress';
import { AllExceptionFilters } from './infrastructure/common/exception-filters-middleware/all-exception-filters.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilters(httpAdapter));

  await app.register(compression);
  documentSwagger(app);
  await app.listen(3000);
}
bootstrap();
