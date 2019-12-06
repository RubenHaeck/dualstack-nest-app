import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Get()
  getAll(): Array<string> {
    return ['Castor','Tiffany'];
  }

  @Get(':id')
  getCatById(@Param() params: any): string {
    console.log(params.id);
    return `This actions returns a #${params.id} cat`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
