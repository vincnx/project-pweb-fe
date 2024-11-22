import { Button } from '@/components/ui/button'
import { formatRupiah } from '@/lib/helpers'
import { Transaction } from '@/types/transaction'
import { ColumnDef } from '@tanstack/react-table'
import { HiMiniChevronUpDown } from "react-icons/hi2"
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'no',
    header: 'No.',
    cell: ({ row }) => {
      return <span>{row.index + 1}.</span>
    }
  },
  {
    accessorKey: 'user.username',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Nama
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'total_amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Total Harga
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      return formatRupiah(row.original.total_amount)
    }
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-center gap-2'
        >
          Tanggal
          <HiMiniChevronUpDown className='w-4 h-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      return format(new Date(row.original.created_at), 'HH:mm, dd MMMM yyyy', { locale: id })
    }
  },
  {
    accessorKey: 'items',
    header: 'Jumlah Produk',
    cell: ({ row }) => {
      return row.original.items.length
    }
  }
]