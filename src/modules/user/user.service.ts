import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto, CreateUserDtoResult } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExists) throw new Error('This user already exists');

    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const userResult: CreateUserDtoResult =
      await this.prismaService.user.create({
        data,
      });

    return userResult;
  }

  async findOne(id: string) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) throw new Error('This user not exists');

    return userExists;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) throw new Error('This user not already exists');

    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) throw new Error('This user not exists');
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
