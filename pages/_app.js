import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from '../components/Navbar/Navbar'
import AuthProvider from '../contexts/AuthProvider'
import '../styles/globals.css'

const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </AuthProvider>
    </QueryClientProvider>
  )
}
