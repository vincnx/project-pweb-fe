import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Toaster } from './components/ui/toaster.tsx'
import { AxiosError } from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: Error) => {
        return error instanceof AxiosError && error.response?.status !== 401
      }
    }
  }
})

const root = createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </StrictMode>
    </QueryClientProvider>
  </Provider>
)
