import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { User } from './Schema/User.schema';
import { BodyDto } from './DTO/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async getUser(userFilter: FilterQuery<User>): Promise<User[]> {
    return this.userRepo.getAllUSer(userFilter);
  }
  async createUser(body: BodyDto): Promise<User> {
    return this.userRepo.createUser(body);
  }
}
