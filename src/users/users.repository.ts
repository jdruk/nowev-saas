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

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create(createUserDto);
    return await this.save(user);
  }
  
  async findAll(): Promise<User[]> {
    return await this.find();
  }
  
  async findOneUser(id: number): Promise<User> {
    return await this.findOneBy({ id: id });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.findOneBy({email: email});
  }
  
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { name, email } = updateUserDto;
    const updatedAt = new Date();
    await this.update(id, { name, email, updatedAt });
  
    return await this.findOneBy({ id: id });
  }
  
  async removeUser(id: number): Promise<void> {
    await this.delete(id);
  }
}
