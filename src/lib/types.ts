import { z } from "zod";

type ActionResponse = {
  error: string | null;
  message: string | null;
}

const registerUserSchema = z.object({
  email: z.string().email('Email Tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword:  z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Password harus sama.'
})

type RegisterUser =  z.infer<typeof registerUserSchema>

export  { registerUserSchema, type RegisterUser, type ActionResponse }