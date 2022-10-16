import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: ['http://localhost:5173', 'http://localhost:3000'] } });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
