import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListUsersService();

    const users = listUserService.execute();

    return response.json(users);
  }
}

export { ListUserController };
