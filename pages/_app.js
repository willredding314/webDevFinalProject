import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from "next/router"

import NavBar from '@/components/NavBar';
import AnonymousNavBar from '@/components/AnonymousNavBar';

const queryClient = new QueryClient({
  defaultOptions: { 
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isLoggingInOrRegistering = router.pathname === '/login' || router.pathname === '/register'

  return (
    <QueryClientProvider client={queryClient} >
        {/* <NavBar name={"David"} /> */}
        {isLoggingInOrRegistering ? null : <AnonymousNavBar />}
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp