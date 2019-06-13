import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { EmployeById } from './interfaces/employe-by-id.interface';
import { Employe } from './interfaces/employe.interface';

@Controller()
export class EmployeController {
  @GrpcMethod('EmployeService')
  findOne(data: EmployeById): Employe {
    const items: Employe[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
    return items.find(({ id }) => id === data.id);
  }
  @GrpcMethod('EmployeService')
  findAll(): any {
    const employes: Employe[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' }
    ];
    return { employes };
  }
}
