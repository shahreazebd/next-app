import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";

import { Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </Provider>
  );
}
