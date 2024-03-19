import { Injectable, Logger } from '@nestjs/common';
import { LoggerCustom } from 'src/domain/interface/logger/logger-custom.interface';

@Injectable()
export class LoggerService extends Logger implements LoggerCustom {
  debug(context: string, message: string): void {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }

  log(context: string, message: string): void {
    super.log(`[LOG] ${message}`, context);
  }

  error(context: string, message: string): void {
    super.error(`[ERROR] ${message}`, context);
  }

  warn(context: string, message: string): void {
    super.warn(`[WARN] ${message}`, context);
  }

  verbose(context: string, message: string): void {
    if (process.env.NODE_ENV !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
