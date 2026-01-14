import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/docker')
  getDocker(): string {
    return this.appService.getDocker();
  }
  @Get('/cicd')
  getCicd(): string {
    return this.appService.getCicd();
  }
}
