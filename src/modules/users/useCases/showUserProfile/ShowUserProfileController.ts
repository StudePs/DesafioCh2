import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const user = this.showUserProfileUseCase.execute({
        user_id: user_id.toString(),
      });
      return response.json(user);
    } catch (error) {
      return response
        .status(404)
        .json({ status_code: 404, error: { message: error.message } });
    }
  }
}

export { ShowUserProfileController };
