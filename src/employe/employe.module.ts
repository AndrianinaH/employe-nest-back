import { Module } from '@nestjs/common';
import { EmployeController } from './employe.controller';

@Module({
  controllers: [EmployeController]
})
export class EmployeModule {}
