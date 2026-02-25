import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.get("/", UserControllers.getAllTutors);
router.get("/by-role", UserControllers.getAllUsersOrRole);
router.get("/student-count", UserControllers.getStudentCount);

export const UserRoutes = router;
