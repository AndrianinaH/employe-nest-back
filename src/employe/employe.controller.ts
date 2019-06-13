import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { EmployeById } from './interfaces/employe-by-id.interface';
import { Employe } from './interfaces/employe.interface';

@Controller()
export class EmployeController {
  employes: any = {
    allEmployes: [
      {
        id: '5cf62371baba6200ccbf06d8',
        nom: 'jean',
        prenom: 'jack',
        poste: 'dev',
        sexe: 'M',
        dateNaissance: '1985-10-10T00:00:00.000Z',
        urlPhoto: 'panda.png'
      },
      {
        id: '5cf623b1baba6200ccbf06d9',
        nom: 'jewawaan',
        prenom: 'wawa',
        poste: 'dev',
        sexe: 'M',
        dateNaissance: '1985-10-10T00:00:00.000Z',
        urlPhoto: 'user2.png'
      },
      {
        id: '5cf6263bf3e38300e61c7fe4',
        nom: 'aqszded',
        prenom: 'waqqqwa',
        poste: 'dev',
        sexe: 'M',
        dateNaissance: '1985-10-10T00:00:00.000Z',
        urlPhoto: 'user3.png'
      },
      {
        id: '5cffbde0b9772200d8502c3d',
        nom: 'farany',
        prenom: 'farany',
        poste: 'farany',
        sexe: 'farany',
        dateNaissance: '2019-06-11T00:00:00.000Z',
        urlPhoto: 'user1.png'
      }
    ]
  };

  @GrpcMethod('EmployeService')
  findOne(data: EmployeById): Employe {
    return this.employes.allEmployes.find(({ id }) => id === data.id);
  }
  @GrpcMethod('EmployeService')
  findAll(): any {
    const allEmployes = this.employes;
    return allEmployes;
  }
}
