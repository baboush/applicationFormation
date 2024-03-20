import { FormatExceptionMessage } from './format-exception.interface';

export interface Exception {
  BadRequestException(data: FormatExceptionMessage): void;
  UnauthorizedException(data?: FormatExceptionMessage): void;
  InternalServerError(data?: FormatExceptionMessage): void;
  ForbiddenException(data?: FormatExceptionMessage): void;
  BadGatewayException(data?: FormatExceptionMessage): void;
  GatewayTimeoutException(data?: FormatExceptionMessage): void;
}
