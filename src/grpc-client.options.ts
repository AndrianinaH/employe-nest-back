import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:3001',
    package: 'employe',
    protoPath: join(__dirname, './employe/employe.proto')
  }
};
