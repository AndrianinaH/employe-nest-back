import { Module } from '@nestjs/common';
import { EmployeController } from './employe.controller';
import { EmployeSchema } from './schemas/employe.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeService } from './employe.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employe', schema: EmployeSchema }])
  ],
  controllers: [EmployeController],
  providers: [EmployeService]
})
export class EmployeModule {}
