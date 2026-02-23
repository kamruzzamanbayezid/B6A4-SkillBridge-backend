import { Router } from "express";
import { tutorProfileController } from "./tutorProfileControlles";

const router = Router();

router.get("/", tutorProfileController.getAllTutors);

export const tutorProfileRoutes = router;
