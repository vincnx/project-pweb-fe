import { DataTable } from "@/components/ui/data-table"
import { AdminLayout } from "@/layouts/AdminLayout"
import { columns } from "./columns"
import { useFetchProductsPhp } from "@/services/product.service"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router-dom"

const ProductsPage = () => {
  const fetchProductsPhpQuery = useFetchProductsPhp()

  if (fetchProductsPhpQuery.isLoading) return <div>Loading...</div>

  return (
    <AdminLayout>
      <Button variant={'outline'} className="flex items-center gap-2" asChild>
        <Link to={'/admin/product/create'} className="w-fit">
          <PlusIcon className="w-4 h-4" />
          Tambah Produk
        </Link>
      </Button>
      <DataTable columns={columns} data={fetchProductsPhpQuery.data} />
    </AdminLayout>
  )
}

export default ProductsPage
