import { Router } from "express";
import { tutorProfileController } from "./tutorProfileControlles";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma/enums";

const router = Router();

router.get("/", tutorProfileController.getAllTutors);
router.get("/tutor-profile/:tutorId", tutorProfileController.getSingleTutor);

export const tutorProfileRoutes = router;
