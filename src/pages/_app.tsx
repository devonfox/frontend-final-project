import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@/components/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
