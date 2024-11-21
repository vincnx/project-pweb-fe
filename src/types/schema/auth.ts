import { z } from "zod"

export const loginFormSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  password: z.string().min(8, 'Password minimal 8 karakter')
})


export const registerFormSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak sama",
  path: ["confirmPassword"],
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>