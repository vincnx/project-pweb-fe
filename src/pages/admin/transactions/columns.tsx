import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { toast } from '@/hooks/use-toast'
import { phpAxiosInstance } from '@/lib/axios'
import { formatRupiah } from '@/lib/helpers'
import { queryClient } from '@/main'
import { Product } from '@/types/product'
import { Transaction } from '@/types/transaction'
import { ColumnDef } from '@tanstack/react-table'
import { EllipsisIcon } from 'lucide-react'
import { HiMiniChevronUpDown } from "react-icons/hi2"
import { Link } from 'react-router-dom'
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
  // {
  //   accessorKey: 'price',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         className='flex items-center gap-2'
  //       >
  //         Harga
  //         <HiMiniChevronUpDown className='w-4 h-4' />
  //       </Button>
  //     )
  //   },
  //   cell: ({ row }) => {
  //     return formatRupiah(row.original.price)
  //   }
  // },
  // {
  //   accessorKey: 'discount',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         className='flex items-center gap-2'
  //       >
  //         Diskon
  //         <HiMiniChevronUpDown className='w-4 h-4' />
  //       </Button>
  //     )
  //   },
  //   cell: ({ row }) => {
  //     if (row.original.discount > 0) {
  //       return <span>{formatRupiah(row.original.discount)}</span>
  //     }
  //     return <span>-</span>
  //   }
  // },
  // {
  //   accessorKey: 'stock',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         className='flex items-center gap-2'
  //       >
  //         Stok
  //         <HiMiniChevronUpDown className='w-4 h-4' />
  //       </Button>
  //     )
  //   }
  // }
]