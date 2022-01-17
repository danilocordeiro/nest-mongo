import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersControler {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUserById(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto.email, createUserDto.age);
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() userUpdates: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, userUpdates);
  }
}
