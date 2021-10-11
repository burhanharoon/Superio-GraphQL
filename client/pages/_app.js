import 'tailwindcss/tailwind.css'
import './styles.css'
import Footer from './Components/Footer';
import { ApolloProvider } from "@apollo/client"
import client from "./services/graphQL/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default MyApp
