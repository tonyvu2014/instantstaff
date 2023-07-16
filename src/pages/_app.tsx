import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-W0ZZV14G3V`}
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W0ZZV14G3V', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
    <Component {...pageProps} />
  </>
);

export default MyApp;
