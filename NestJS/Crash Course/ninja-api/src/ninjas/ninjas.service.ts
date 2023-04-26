import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  ninjas = [
    { id: '0', name: 'NinjaA', weapon: 'Shuriken' },
    { id: '1', name: 'NinjaB', weapon: 'Nunchunks' },
  ];

  getNinjas(weapon?: string) {
    if (weapon) {
      return this.ninjas.filter((ninja) => {
        return ninja.weapon === weapon;
      });
    }

    return this.ninjas;
  }

  getNinjaById(id: string) {
    return this.ninjas.find((ninja) => {
      return ninja.id === id;
    });
  }

  createNinja(ninjaData: CreateNinjaDto) {
    const id = new Date().getMilliseconds();
    this.ninjas.push({
      id: id.toString(),
      ...ninjaData,
    });

    return this.ninjas;
  }

  updateNinja(id: string, ninjaData: UpdateNinjaDto) {
    const index = this.ninjas.findIndex((ninja) => {
      return ninja.id === id;
    });
    this.ninjas[index] = {
      id,
      name: ninjaData.name,
      weapon: ninjaData.weapon,
    };

    return this.ninjas[index];
  }

  removeNinja(id: string) {
    const index = this.ninjas.findIndex((ninja) => {
      return ninja.id === id;
    });

    const removedNinja = this.ninjas[index];
    this.ninjas = this.ninjas.slice(index, index + 1);

    return removedNinja;
  }
}
