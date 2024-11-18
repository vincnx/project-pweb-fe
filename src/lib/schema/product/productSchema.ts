import { z } from "zod"

const BaseProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().min(0, 'Price must be positive'),
  discount: z.number().min(0, 'Discount must be positive'),
  stock: z.number().min(1, 'Stock must be at least 1'),
  description: z.string().optional(),
})

export const CreateProductSchema = BaseProductSchema.extend({
  image: z.instanceof(File, { message: 'Image is required' })
})

export const UpdateProductSchema = BaseProductSchema.extend({
  image: z.union([z.instanceof(File), z.string()]).optional(),
  _method: z.string().default('PUT')
})

export type CreateProductSchema = z.infer<typeof CreateProductSchema>
export type UpdateProductSchema = z.infer<typeof UpdateProductSchema>