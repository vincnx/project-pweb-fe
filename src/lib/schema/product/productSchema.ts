import { z } from "zod"

export const ProductSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  price: z.coerce.number().min(1, 'Harga wajib diisi'),
  discount: z.coerce.number(),
  stock: z.coerce.number().min(1, 'Stok wajib diisi'),
  description: z.string(),
  image: z.instanceof(File).refine((file) => file.size <= 5000000, {
    message: 'Ukuran gambar maksimal 5MB',
  }),
})

export type FormProductSchema = z.infer<typeof ProductSchema>