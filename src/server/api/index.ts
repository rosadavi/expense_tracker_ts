import express from "express";
import { db } from "../database";
import { userTable } from "../database/schema";
import { signupSchema } from "@/schema/signup.schema";
import { eq } from "drizzle-orm";
import cors from "cors";

const app = express();
const port = 3030;

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/signup", async (req, res) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.message });
  }

  const existingUser = await db.query.userTable.findFirst({
    where: eq(userTable.email, result.data.email),
  });

  if (existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const newUser = await db.insert(userTable).values({
    username: result.data.username,
    email: result.data.email,
    password: result.data.password,
  });

  if (!newUser) {
    return res.status(500).json({ message: "Failed to create user" });
  }

  res.status(201).json({ message: "User created successfully" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
