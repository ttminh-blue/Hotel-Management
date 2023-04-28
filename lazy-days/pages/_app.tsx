import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import https from "https";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

axios.defaults.httpsAgent = new https.Agent({
   rejectUnauthorized: false,
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <Component {...pageProps} />
         <ToastContainer />
      </QueryClientProvider>
   );
}
