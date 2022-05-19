import { Controller, Get } from '@nestjs/common';

@Controller('mini-users')
export class MiniController {
  @Get()
  async getAllMinis() {
    return 'This endpoints returns all minis';
  }
}
