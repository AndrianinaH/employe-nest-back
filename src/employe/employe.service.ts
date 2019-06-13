import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employe } from './interfaces/employe.interface';
import { CreateEmployeDto } from './dto/create-employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    @InjectModel('Employe') private readonly employeModel: Model<Employe>
  ) {}

  async create(createEmployeDto: CreateEmployeDto): Promise<Employe> {
    const createdCat = new this.employeModel(createEmployeDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Employe[]> {
    return await this.employeModel.find().exec();
  }
}
