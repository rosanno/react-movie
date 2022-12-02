import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="bg-gray-800 py-3 px-3 md:px-3 lg:px-20 xl:px-20 2xl:px-20 fixed inset-x-0 z-20">
        <Header />
      </header>
      <Component {...pageProps} />
    </>
  );
}
