import { Link, useLocation } from "react-router-dom"

export const SidebarButton = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation()

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-slate-900 ${location.pathname === to ? 'bg-muted text-slate-900' : 'text-muted-foreground'}`}
    >
      {children}
    </Link>
  )
}