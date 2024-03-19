import {
  BadGatewayException,
  BadRequestException,
  ForbiddenException,
  GatewayTimeoutException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Exception } from 'src/domain/interface/exception/exception.interface';
import { FormatExceptionMessage } from 'src/domain/interface/exception/format-exception.interface';

@Injectable()
export class ExceptionsService implements Exception {
  BadRequestException(data: FormatExceptionMessage): void {
    throw new BadRequestException(data);
  }

  UnauthorizedException(data?: FormatExceptionMessage): void {
    throw new UnauthorizedException(data);
  }

  InternalServerError(data?: FormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }

  ForbiddenException(data?: FormatExceptionMessage): void {
    throw new ForbiddenException(data);
  }

  BadGatewayException(data?: FormatExceptionMessage): void {
    throw new BadGatewayException(data);
  }

  GatewayTimeoutException(data?: FormatExceptionMessage): void {
    throw new GatewayTimeoutException(data);
  }
}
