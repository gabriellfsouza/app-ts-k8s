import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.APP);
    return 'Hello World!';
  }

  getExample(): string {
    return 'Running on K8S!';
  }
}
