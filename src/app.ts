import express from "express";
import cors from "cors";
import { authRoutes } from "./modules/auth/authRoutes";
import notFound from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";
import config from "./config";
import { categoryRouter } from "./modules/category/categoryRoutes";
import auth from "./middlewares/auth";
import { UserRole } from "../generated/prisma/enums";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: config.backend_url,
    credentials: true,
  }),
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("SkillBridge app for learners!!");
});

app.use(notFound);

app.use(globalErrorHandler);

export default app;
