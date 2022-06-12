import { json, Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json({ status_code: 200, body: { users } });
    } catch (error) {
      return response
        .status(401)
        .json({ status_code: 401, error: { message: error.message } });
    }
  }
}

export { ListAllUsersController };
