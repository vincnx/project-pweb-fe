import { Product } from "./product"
import { User } from "./user"

interface TransactionItem {
  transaction_id: number
  product_id: number
  quantity: number
  product: Product
}

interface Transaction {
  id: number
  user_id: number
  total_amount: number
  created_at: string
  updated_at: string
  items: TransactionItem[]
  user: User
}

export type {
  TransactionItem,
  Transaction,
}
