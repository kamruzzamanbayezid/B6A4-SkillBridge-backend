import { Router } from "express";
import { categoryController } from "./categoryControllers";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma/enums";

const router = Router();

router.post(
  "/create-category",
  auth(UserRole.ADMIN),
  categoryController.createCategory,
);
router.get("/", categoryController.getALlCategories);
router.delete(
  "/delete-category/:categoryId",
  auth(UserRole.ADMIN),
  categoryController.deleteCategory,
);

export const categoryRouter = router;
