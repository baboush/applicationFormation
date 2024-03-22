import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/interface/database-config/database-config.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {
    this.configService = configService;
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('localhost');
  }
  getDatabasePort(): number {
    return this.configService.get<number>('3306');
  }
  getDatabaseUser(): string {
    return this.configService.get<string>('arnaud');
  }
  getDatabasePassword(): string {
    return this.configService.get<string>('lili26380');
  }
  getDatabaseName(): string {
    return this.configService.get<string>('test_data');
  }
  getDatabaseSchema(): string {
    return this.configService.get<string>('');
  }
  getDatabaseSync(): boolean {
    return this.configService.get<boolean>('true');
  }
}
