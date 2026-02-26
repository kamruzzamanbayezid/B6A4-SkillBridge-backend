import { NextFunction, Request, Response } from "express";
// import { bookingServices } from "./bookingServices";
import sendResponse from "../../utils/sendResponse";

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
//     const result = await bookingServices.createBooking();
//     sendResponse(res, {
//       statusCode: 201,
//       success: true,
//       message: "Booking created successfully!",
//       data: result,
//     });
  } catch (error: any) {
    next(error);
  }
};

export const bookingController = {
  createCategory,
};
