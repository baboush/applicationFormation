import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({ http: process.env.NODE_ENV !== 'production' }),
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
    ExceptionsModule,
    EnvironmentConfigModule,
    ControllersModule,
  ],
})
export class AppModule {}
