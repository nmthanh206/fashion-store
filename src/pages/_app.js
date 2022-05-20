import Layout from "@/components/Layout";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "@/styles/boxicons-2.0.7/css/boxicons.min.css";
import "@/sass/index.scss";
import "@/styles/tailwind.css";

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </PersistGate>
      </Provider>
   );
}

export default MyApp;
