import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService {
  async execute() {
    const userRespositories = getCustomRepository(UsersRepositories);

    const users = await userRespositories.find();

    return users;
  }
}

export { ListUsersService };
