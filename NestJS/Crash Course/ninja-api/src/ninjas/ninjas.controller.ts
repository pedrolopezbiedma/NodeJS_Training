import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private ninjasService: NinjasService) {}

  // GET /ninjas?[type=X] -- [ ninjas ]
  @Get()
  getNinjas(@Query('weapon') ninjaWeapon: string) {
    return this.ninjasService.getNinjas(ninjaWeapon);
  }

  // GET /ninjas/:id -- { ninja }
  @Get(':id')
  getNinjaById(@Param('id') ninjaId: string) {
    return this.ninjasService.getNinjaById(ninjaId);
    // return { id: ninjaId };
  }

  // POST /ninjas -- { simple response }
  @Post()
  createNinja(@Body() newNinja: CreateNinjaDto) {
    return this.ninjasService.createNinja(newNinja);
    // return { name: newNinja.name };
  }

  // PUT /ninjas/:id -- { updated ninja }
  @Put('/:id')
  updateNinjaById(
    @Param('id') ninjaId: string,
    @Body() updatedNinja: UpdateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(ninjaId, updatedNinja);
    // return { id: ninjaId };
  }

  // DELETE /ninjas/:id -- { simple response }
  @Delete('/:id')
  deleteNinjaById(@Param('id') ninjaId: string) {
    // return { id: ninjaId };
    return this.ninjasService.removeNinja(ninjaId);
  }
}
