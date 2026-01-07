import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import prisma from "./prisma/client";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
// console.log("DATABASE_URL =", process.env.DATABASE_URL);


app.get("/", (_req, res) => {
  res.send("Typing backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

async function testDB() {
  const users = await prisma.user.findMany();
  console.log("Users in DB:", users);
}

testDB();
