import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    // console.log(process.env.JWT_SECRET);
    return this.appService.getHello();
  }
}
