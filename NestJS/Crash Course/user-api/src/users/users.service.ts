import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: "Pedro" },
    { id: 1, name: "Lucia" },
    { id: 2, name: "Pablo" },
    { id: 3, name: "Lucas" },
  ];

  getUsers(userName: string): any {
    if (userName) {
      return this.users.find((user) => {
        return user.name === userName;
      });
    }
    return this.users;
  }

  getUserById(userId: number): User {
    const user = this.users.find((user) => {
      return user.id === +userId;
    });

    if (!user) {
      throw new NotFoundException("Id not found");
    }

    return user;
  }

  createUser(userInfo: CreateUserDto): User[] {
    const newUser = {
      id: Date.now(),
      ...userInfo,
    };

    this.users.push(newUser);

    return this.users;
  }
}
