import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employe } from './interfaces/employe.interface';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectModel('Employe') private readonly employeModel: Model<Employe>
  ) {}

  async create(createEmployeDto: CreateEmployeDto): Promise<Employe> {
    const add = new this.employeModel(createEmployeDto);
    return add.save();
  }

  async update(updateEmplyeDto: UpdateEmployeDto): Promise<Employe> {
    await this.employeModel.findByIdAndUpdate(
      updateEmplyeDto.id,
      updateEmplyeDto
    );
    return this.employeModel.findById(updateEmplyeDto.id);
  }

  async delete({ id }) {
    return this.employeModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<Employe[]> {
    return this.employeModel.find();
  }

  async findById({ id }): Promise<Employe> {
    return this.employeModel.findById(id);
  }
}
