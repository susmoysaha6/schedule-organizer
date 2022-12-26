import Navbar from '../components/Navbar/Navbar'
import AuthProvider from '../contexts/AuthProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthProvider>
  )
}
