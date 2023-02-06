import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Layout } from "../components";
import store from "../store";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence mode='wait'>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </Provider>
  );
}
