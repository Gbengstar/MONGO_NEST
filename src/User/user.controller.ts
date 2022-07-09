import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BodyDto } from './DTO/user.dto';
import { User } from './Schema/User.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: BodyDto): Promise<User> {
    return await this.userService.createUser(body);
  }

  @Get()
  async getUser(): Promise<User[]> {
    return await this.userService.getUser({});
  }
}
