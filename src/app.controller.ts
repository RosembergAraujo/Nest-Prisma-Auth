import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUserFromJwt } from './modules/auth/decorators/current-user.decorator';
import { IsPublic } from './modules/auth/decorators/is-public.decorator';
import { User } from './modules/user/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getHello() {
    // console.log(process.env.JWT_SECRET);
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUserFromJwt() user: User) {
    return user;
  }
}
