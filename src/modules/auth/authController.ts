import { NextFunction, Request, Response } from "express";
import { authService } from "./authServices";
import sendResponse from "../../utils/sendResponse";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.createUser(req?.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: any) {
    // sendResponse(res, {
    //   statusCode: 500,
    //   success: false,
    //   message: error?.message,
    //   data: null,
    // });
    next(error);
  }
};

export const authController = {
  createUser,
};
