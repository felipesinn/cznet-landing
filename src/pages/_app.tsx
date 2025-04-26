import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.variable}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
