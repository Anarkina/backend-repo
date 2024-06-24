import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

getAll(){
    return[{
        name: 'First request',
        isCompleted: true,
      }]
}}