import Navbar from "./Navbar";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className=" bg-gradient-to-b from-slate-600 to-slate-800">
      <div className=" container mx-auto min-h-screen text-white ">
        <Navbar />
        <FeaturedPost />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
