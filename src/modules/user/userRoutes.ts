import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.get("/", UserControllers.getAllUsers);
router.get("/student-count", UserControllers.getStudentCount);

export const UserRoutes = router;
