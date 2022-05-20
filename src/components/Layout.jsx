import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

const Layout = ({ children, ...props }) => {
   return (
      <div>
         <Header {...props} />
         <div className="container">
            <div className="main">{children}</div>
         </div>
         <Footer />
         <ProductViewModal />
      </div>
   );
};

export default Layout;
