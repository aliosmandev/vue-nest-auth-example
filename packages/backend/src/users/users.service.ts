import { Model } from 'mongoose';
import { BadRequestException, Get, Injectable, NotFoundException, UnauthorizedException, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.isEmailUnique(createUserDto.email);
    if (user) throw new NotFoundException('Email most be unique');

    const data = await this.userModel.create(createUserDto);
    return data;
  }

  private async isEmailUnique(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('Email not found');
    }
    return user;
  }

  async validateCredentials(user: User, password: string): Promise<boolean> {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new BadRequestException('Wrong email or password');
    }
    return match;
  }

  public async validateUser(userId: string): Promise<any> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    return user;
  }
}
