import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Api')
  .setDescription('Api swagger gestion')
  .setVersion('1.0')
  .addTag('task')
  .build();

export const documentSwagger = (app: NestFastifyApplication) => {
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
};
