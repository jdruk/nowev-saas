import { DataSource, Repository } from 'typeorm';
import { Saas } from './entities/saas.entity';
import { CreateSaasDto } from './dto/create-saas.dto';
import { Injectable } from '@nestjs/common';
import { UpdateSaasDto } from './dto/update-saas.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SaasRepository extends Repository<Saas> {
  constructor(private dataSource: DataSource) {
    super(Saas, dataSource.createEntityManager());
  }

  async createSaas(createSaasDto: CreateSaasDto): Promise<Saas> {
    const saas = this.create(createSaasDto);
    return await this.save(saas);
  }
  
  async findAll(): Promise<Saas[]> {
    return await this.find();
  }
  
  async findOneSaas(id: number): Promise<Saas> {
    return await this.findOneBy({ id: id });
  }
  
  async updateSaas(id: number, updateSaasDto: UpdateSaasDto): Promise<Saas> {
    const { name, documentId } = updateSaasDto;
    const updatedAt = new Date();
    await this.update(id, { name, documentId, updatedAt });
  
    return await this.findOneBy({ id: id });
  }

  async findUsersBySaasId(id: number): Promise<User[]> {
    const saas = await this.findOne({
      where: { id: id },
      relations: ['users'],
    });
    
    return saas ? saas.users : [];
  }
}
