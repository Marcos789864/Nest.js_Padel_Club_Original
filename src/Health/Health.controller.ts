import {
  Controller,
  Get,
} from '@nestjs/common';



@Controller('Health')
export class HealthController {

  @Get()
  async keepAlive() {
    return "Alive";
  }
}
