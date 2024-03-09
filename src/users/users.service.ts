import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { UsersPresenter } from './users.presenter';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private usersPresenter: UsersPresenter,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.createUser(createUserDto);
  }

  async findAll(): Promise<any> {
    const users = await this.usersRepository.findAll();
    return this.usersPresenter.presentUsers(users);
  }

  async findOne(id: number): Promise<any> {
    const user = await this.usersRepository.findOneUser(id);
    return this.usersPresenter.presentUsers([user]);
  }

  async findOneByEmail(email: string): Promise<any> {
    const user = await this.usersRepository.findOneByEmail(email)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  remove(id: number) {
    this.usersRepository.removeUser(id);
    return `This action removed user with id ${id}`;
  }
}
