import { DataTable } from "@/components/ui/data-table"
import { AdminLayout } from "@/layouts/AdminLayout"
import { columns } from "./columns"
import { useFetchTransactionsAdminPhp } from "@/services/transaction.service"

const TransactionsPage = () => {
  const fetchTransactionsPhpQuery = useFetchTransactionsAdminPhp()

  if (fetchTransactionsPhpQuery.isLoading) return <div>Loading...</div>

  return (
    <AdminLayout>
      <DataTable columns={columns} data={fetchTransactionsPhpQuery.data} />
    </AdminLayout>
  )
}

export default TransactionsPage
