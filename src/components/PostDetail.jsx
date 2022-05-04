import Navbar from "./Navbar";
import Footer from "./Footer";

const PostDetail = (props) => {
  return (
    <div className=" bg-gradient-to-b from-slate-600 to-slate-800">
      <div className="container mx-auto min-h-screen text-white ">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default PostDetail;
