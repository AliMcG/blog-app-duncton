import "../styles/globals.css";
import {Layout} from "../components/Layout";
import { polyfill } from 'interweave-ssr';

polyfill();
// import { Montserrat } from '@next/font/google'

// const montserrat = Montserrat({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  return (
    // <main className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // {/* </main> */}
    
  );
}

export default MyApp;
