import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDocker(): string {
    return 'Hello Docker';
  }
  getCicd(): string {
    return 'Hello CI/CD';
  }
}
