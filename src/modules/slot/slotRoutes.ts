import { Router } from "express";
import { slotControllers } from "./slotControllers";

const router = Router();

router.post("/create-slot", slotControllers.createSlot);

export const slotRouter = router;
