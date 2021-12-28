import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('NestApplication', { timestamp: true });
  const port = process.env.PORT;

  // ValidationPipe()
  // Prerequisite: 'class-validator' and 'class-transformer' to be npm installed
  // 'class-validator' is used in DTO for field validation (see: user.dto.ts)
  // 'class-transformer' is used by ValidationPipe 
  // and handle error and return to client ...
  // ... whenever there is a validation error on Typegoose/Mongoose
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('My First Swagger')
    .setDescription('Just learning swagger B-)')
    .setVersion('0.1')
    .addTag('user')
    .addTag('movie')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port).then(() => {
    logger.log(`Running on localhost:${port}`);
  });
}
bootstrap();
