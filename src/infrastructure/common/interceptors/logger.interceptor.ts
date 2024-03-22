import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { LoggerService } from 'src/infrastructure/logger/logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const ip = this.getIp(request);
    this.logger.log(
      `Request incoming on ${request.path}`,
      `method=${request.method} ip=${ip}`,
    );
    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `End Request for ${request.path}`,
          `method=${request.method} ip=${ip} now=${now}`,
        );
      }),
    );
  }

  private getIp(request: any): string {
    let ip: string;
    const ipAddr = request.headers['x-forwarded-for'];
    if (ipAddr) {
      const list = ipAddr.split(',');
      ip = list[list.length - 1];
    } else {
      ip = request.socket.remoteAddress;
    }
    console.log(ip);
    ip.replace('::fff:', '');
    return ip;
  }
}
