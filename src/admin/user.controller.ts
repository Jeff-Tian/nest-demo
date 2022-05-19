import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  async getAllUsers() {
    return 'This action returns all users';
  }
}
