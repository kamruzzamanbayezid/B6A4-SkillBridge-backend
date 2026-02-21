import express from "express";
import cors from "cors";
import { authRoutes } from "./modules/auth/authRoutes";
import notFound from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("SkillBridge app for learners!!");
});

app.use(notFound);

app.use(globalErrorHandler);

export default app;
