import Layout from "@/components/Layout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "@/styles/boxicons-2.0.7/css/boxicons.min.css";
import "@/sass/index.scss";
import "@/styles/tailwind.css";
function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </Provider>
   );
}

export default MyApp;
