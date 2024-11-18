import { AdminLayout } from "@/layouts/AdminLayout"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { IDRInput, Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { UpdateProductSchema } from "@/lib/schema/product/productSchema"
import { useFetchProductByIdPhp, useUpdateProductPhp } from "@/services/product.service"

const EditProductPage = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const fetchProductByIdQuery = useFetchProductByIdPhp(productId!)
  const updateProductMutation = useUpdateProductPhp(productId!)

  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const form = useForm<UpdateProductSchema>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: {
      name: "",
      price: 0,
      discount: 0,
      stock: 1,
      description: "",
      image: undefined,
      _method: 'PUT'
    }
  })

  const onSubmit = (values: UpdateProductSchema) => {
    const { image, ...rest } = values

    const payload = image instanceof File
      ? { ...rest, image }
      : rest
    console.log(payload)
    updateProductMutation.mutate(payload)
  }

  useEffect(() => {
    if (fetchProductByIdQuery.data) {
      form.reset(fetchProductByIdQuery.data)
      setImagePreview(fetchProductByIdQuery.data.image)
    }
  }, [fetchProductByIdQuery.data, form])

  if (fetchProductByIdQuery.isPending || !fetchProductByIdQuery.data) return <div>Loading...</div>

  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Tambahkan Produk Baru</h1>
        <Button variant="outline" onClick={() => navigate(-1)}>Kembali</Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="input nama..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Harga <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <IDRInput type="number" placeholder="input harga..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Diskon</FormLabel>
                  <FormControl>
                    <IDRInput type="number" placeholder="input diskon..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stok <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input type="number" placeholder="input stok..." {...field} min={1} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Textarea placeholder="input deskripsi..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...rest } }) => (
              <FormItem>
                <FormLabel>Gambar <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    type='file'
                    accept='image/*'
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        onChange(file)
                        const reader = new FileReader()
                        reader.onloadend = () => {
                          setImagePreview(reader.result as string)
                        }
                        reader.readAsDataURL(file)
                      }
                    }}
                    {...rest}
                  />
                </FormControl>
                {(typeof value === 'string' || imagePreview) && (
                  <img
                    src={typeof value === 'string' ? value : imagePreview!}
                    alt="Preview"
                    className="mt-2 max-w-xs"
                  />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Tambahkan Produk</Button>
        </form>
      </Form>

    </AdminLayout>
  )
}

export default EditProductPage
