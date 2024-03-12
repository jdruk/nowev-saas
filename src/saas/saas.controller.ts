import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaasService } from './saas.service';
import { CreateSaasDto } from './dto/create-saas.dto';
import { UpdateSaasDto } from './dto/update-saas.dto';
import { Public } from '../decorators/public.decorator';

@Controller('saas')
export class SaasController {
  constructor(private readonly saasService: SaasService) {}

  @Public()
  @Post()
  create(@Body() createSaasDto: CreateSaasDto) {
    return this.saasService.create(createSaasDto);
  }

  @Get()
  findAll() {
    return this.saasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaasDto: UpdateSaasDto) {
    return this.saasService.update(+id, updateSaasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saasService.remove(+id);
  }

  @Get('users/:id')
  getSaasUsers(@Param('id') id: string) {
    return this.saasService.findUsersBySaasId(+id);
  }
}
