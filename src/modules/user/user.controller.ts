import { Request, Response } from "express";
import { UserServices } from "./user.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query;
    const searchString =
      typeof searchTerm === "string" ? searchTerm : undefined;
    const result = await UserServices.getAllUsers(searchString);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};

const getStudentCount = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getStudentCount();

    res.status(200).json({
      success: true,
      message: "Student count fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};

export const UserControllers = {
  getAllUsers,
  getStudentCount,
};
