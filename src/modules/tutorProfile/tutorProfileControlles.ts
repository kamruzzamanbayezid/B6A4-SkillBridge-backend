import { NextFunction, Request, Response } from "express";
import { tutorProfileServices } from "./tutorProfileServices";
import sendResponse from "../../utils/sendResponse";

const getAllTutors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const search = (req?.query?.search as string) || "";
  try {
    const result = await tutorProfileServices.getAllTutors({ search });
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
