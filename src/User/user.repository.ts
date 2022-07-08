import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, userDocument } from './Schema/User.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private UserModel: Model<userDocument>) {}

  async createUser(user: User): Promise<User> {
    return await this.UserModel.create(user);
  }

  async getOneUSer(userFilterQuery: FilterQuery<User>): Promise<User> {
    return await this.UserModel.findOne(userFilterQuery);
  }

  async getAllUSer(userFilterQuery: FilterQuery<User>): Promise<User[]> {
    return await this.UserModel.find(userFilterQuery);
  }

  async updateUser(userquery: Partial<User>): Promise<User> {
    return await this.UserModel.findOneAndUpdate(userquery);
  }

  async deleteUser(userFilterQuery: FilterQuery<User>): Promise<void> {
    return await this.UserModel.deleteOne(userFilterQuery);
  }
}

// userFilterQuery: FilterQuery<User>
