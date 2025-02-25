import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use((req, res, next) => {
    console.log(`📡 Recibida: ${req.method} ${req.url}`);
    next();
  });
  
  await app.listen(3005, '0.0.0.0');  // Escuchar en todas las interfaces de red
}
bootstrap();