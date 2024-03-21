import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { ConfigModule } from '@nestjs/config';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,
  ],
})
export class AppModule {}
