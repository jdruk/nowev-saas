import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create(createUserDto);
    return this.save(user);
  }

  findAll(): Promise<User[]> {
    return this.find();
  }

  findOneUser(id: number): Promise<User> {
    return this.findOneBy({ id: id });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { name, email } = updateUserDto;
    const updated_at = new Date();
    this.update(id, { name, email, updated_at });

    return this.findOneBy({ id: id });
  }

  removeUser(id: number): Promise<void> {
    this.delete(id);
    return;
  }
}
