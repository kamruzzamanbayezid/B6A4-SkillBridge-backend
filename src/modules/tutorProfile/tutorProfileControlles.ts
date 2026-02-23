import { NextFunction, Request, Response } from "express";
import { tutorProfileServices } from "./tutorProfileServices";
import sendResponse from "../../utils/sendResponse";

const getAllTutors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await tutorProfileServices.getAllTutors();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tutors retrieve successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const tutorProfileController = {
  getAllTutors,
};
