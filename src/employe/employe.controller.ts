import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Employe } from './interfaces/employe.interface';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { EmployeIdDto } from './dto/employe-id-dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Controller()
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @GrpcMethod('EmployeService')
  async findOne(dto: EmployeIdDto): Promise<Employe> {
    return await this.employeService.findById(dto);
  }

  @GrpcMethod('EmployeService')
  async findAll(): Promise<any> {
    const allEmployes = await this.employeService.findAll();
    return { allEmployes };
  }

  @GrpcMethod('EmployeService')
  async create(dto: CreateEmployeDto) {
    return await this.employeService.create(dto);
  }

  @GrpcMethod('EmployeService')
  async update(dto: UpdateEmployeDto) {
    return await this.employeService.update(dto);
  }

  @GrpcMethod('EmployeService')
  async delete(dto: EmployeIdDto) {
    return await this.employeService.delete(dto);
  }
}
