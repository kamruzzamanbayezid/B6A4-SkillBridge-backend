import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SkillBridge app for learners!!");
});

export default app;
