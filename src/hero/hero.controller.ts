import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOptions } from '../grpc-client.options';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

interface HeroService {
  findOne(data: { id: number }): Observable<any>;
}

@Controller()
export class HeroController {
  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    const items: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
    return items.find(({ id }) => id === data.id);
  }
  @GrpcMethod('HeroService')
  findAll(): any {
    const heros: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
    return { heros };
  }
}
