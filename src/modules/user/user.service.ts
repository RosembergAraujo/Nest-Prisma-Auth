import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserDto) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) throw new Error('This user already exists');
    return await this.prismaService.user.create({
      data,
    });
  }

  async findOne(id: string) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!userExists) throw new Error('This user not already exists');

    return userExists;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
