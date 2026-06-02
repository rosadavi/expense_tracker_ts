import z from "zod";

export const signupSchema = z.object({
  email: z.email("Please enter a valid email address."),
  username: z
    .string()
    .min(1, "Username is required.")
    .max(15, "Username must be 15 characters or less."),
  password: z.string().min(5, "Password must be at least 5 characters long."),
});
