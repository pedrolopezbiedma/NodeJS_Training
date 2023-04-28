// eslint-disable-next-line prettier/prettier
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query("name") userName: string): User[] {
    return this.usersService.getUsers(userName);
  }

  @Get(":id")
  getUserById(@Param("id", ParseIntPipe) userId: number): User {
    return this.usersService.getUserById(userId);
  }

  @Post()
  createUser(@Body() userInfo: CreateUserDto): User[] {
    return this.usersService.createUser(userInfo);
  }
}

// Ahora, al endpoint de getUsers le vamos a pasar un parametro para filtrar, que filtre por.....name
// Le ponemos una excepcion de not found si no hay ningun usuario con el nombre que hemos pasado
// Ahora vamos a usar pipes para transformar el id de string a int

// Ahora, vamos a ponerle validation a toda la aplicacion, y para eso nos vamos a ir al main.ts y le vamos a poner a la app.useGlobalPipes(new ValidationPipe()).
// Instalamos lo que nos dicen que instalemos y class-transformer
