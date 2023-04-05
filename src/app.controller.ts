import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import JokesInterface from './jokes.interface';
import queryInterface from './query.interface';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/jokes')
  async getHello(@Query() query: queryInterface): Promise<JokesInterface[]>{
    const jokes = [];

    if (!query.count) query.count = 1;

    for (let i = 1; i<= query.count; i++) {
      jokes.push(this.appService.getHello())
    }

    return Promise.all(jokes);
  }
}
