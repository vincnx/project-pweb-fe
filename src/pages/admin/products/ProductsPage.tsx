import { DataTable } from "@/components/ui/data-table"
import { AdminLayout } from "@/layouts/AdminLayout"
import { columns } from "./columns"
import { useFetchProducts } from "@/services/product.service"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router-dom"

const ProductsPage = () => {

  const fetchProductsQuery = useFetchProducts()

  if (fetchProductsQuery.isLoading) return <div>Loading...</div>

  return (
    <AdminLayout>
      <Link to={'/admin/product/create'} className="w-fit">
        <Button variant={'outline'} className="flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Tambah Produk
        </Button>
      </Link>
      <DataTable columns={columns} data={fetchProductsQuery.data} />
    </AdminLayout>
  )
}

export default ProductsPage
