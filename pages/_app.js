import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from "next/router"

import NavBar from '@/components/Navigation/NavBar';
import { CurrentUserContext, CurrentUserProvider} from '@/providers/CurrentUserProvider';

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
      <CurrentUserProvider children={CurrentUserContext}>
        <NavBar />
        <Component {...pageProps} />
      </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default MyApp