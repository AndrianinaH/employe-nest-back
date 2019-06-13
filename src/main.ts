import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    ApplicationModule,
    grpcClientOptions
  );
  await app.listenAsync();
}
bootstrap();
