import { Router } from "express";
import { authController } from "./authController";

const router = Router();

router.post("/register", authController.createUser);

export const authRoutes = router;
