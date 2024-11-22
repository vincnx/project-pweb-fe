import { Product } from "./product"

export interface Cart {
  id: string
  user_id: string
  product_id: string
  quantity: number
  product: Product
}