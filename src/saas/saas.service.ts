import { Injectable } from '@nestjs/common';
import { CreateSaasDto } from './dto/create-saas.dto';
import { UpdateSaasDto } from './dto/update-saas.dto';
import { SaasRepository } from './saas.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SaasService {
  constructor(
    @InjectRepository(SaasRepository)
    private saasRepository: SaasRepository,
  ) {}

  create(createSaasDto: CreateSaasDto) {
    return this.saasRepository.createSaas(createSaasDto);
  }

  findAll() {
    return `This action returns all saas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saa`;
  }

  update(id: number, updateSaasDto: UpdateSaasDto) {
    return `This action updates a #${id} saa`;
  }

  remove(id: number) {
    return `This action removes a #${id} saa`;
  }

  findUsersBySaasId(id: number) {
    return this.saasRepository.findUsersBySaasId(id);
  }
}
