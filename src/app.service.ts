import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Hello Nest</h1>`;
  }
  getNew(): string {
    return `<h2>New Route</h2>`;
  }
}
