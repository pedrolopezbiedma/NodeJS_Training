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

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?[type=X] -- [ ninjas ]
  @Get()
  getNinjas(@Query('type') ninjaType: string) {
    return [{ type: ninjaType }];
  }

  // GET /ninjas/:id -- { ninja }
  @Get(':id')
  getNinjaById(@Param('id') ninjaId: string) {
    return { id: ninjaId };
  }

  // POST /ninjas -- { simple response }
  @Post()
  createNinja(@Body() newNinja: CreateNinjaDto) {
    return { name: newNinja.name };
  }

  // PUT /ninjas/:id -- { updated ninja }
  @Put('/:id')
  updateNinjaById(@Param('id') ninjaId: string) {
    return { id: ninjaId };
  }

  // DELETE /ninjas/:id -- { simple response }
  @Delete('/:id')
  deleteNinjaById(@Param('id') ninjaId: string) {
    return { id: ninjaId };
  }
}
