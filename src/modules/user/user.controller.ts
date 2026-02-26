import { Request, Response } from "express";
import { UserServices } from "./user.service";
import { UserRole } from "../../../generated/prisma/enums";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();

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

const getAllTutors = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllTutors(req.query);

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

const getAllUsersOrRole = async (req: Request, res: Response) => {
  try {
    const { role } = req?.query;

    const result = await UserServices.getAllUsersOrRole(role as UserRole);

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
  getAllTutors,
  getAllUsersOrRole,
  getStudentCount,
  getAllUsers,
};
