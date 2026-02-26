import { NextFunction, Request, Response } from "express";
import { slotServices } from "./slotServices";
import sendResponse from "../../utils/sendResponse";

const createSlot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await slotServices.createSlot(req?.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Slot created successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const slotControllers = {
  createSlot,
};
