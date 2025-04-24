import "@/styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
        <Head>
          <title>Goovo</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}
