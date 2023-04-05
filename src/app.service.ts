import { Injectable } from '@nestjs/common';
import config from '../config.json';
import axios from 'axios';
import JokesInterface from './jokes.interface';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const response = axios.get<JokesInterface>(config.JOKES_API);
    return (await response).data;
  }
}
