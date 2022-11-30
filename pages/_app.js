import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

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
  return (
    <QueryClientProvider client={queryClient} >
        {/* <NavBar name={"David"} /> */}
        <AnonymousNavBar />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp