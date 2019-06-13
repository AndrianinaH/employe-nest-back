import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // ----------Switch to basic microservice with NestFactory.createMicroservice():

  const app = await NestFactory.createMicroservice(
    ApplicationModule,
    grpcClientOptions
  );
  await app.listenAsync();
}
bootstrap();
