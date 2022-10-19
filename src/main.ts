import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(` Running at ${process.env.PORT} port`);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();