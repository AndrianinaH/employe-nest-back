import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeModule } from './employe/employe.module';

@Module({
  imports: [
    EmployeModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/employe_app`)
  ]
})
export class ApplicationModule {}
