import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register route hit" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login route hit" });
});

export default router;
