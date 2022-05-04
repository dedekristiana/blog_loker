import { useParams } from "react-router-dom";
import PostDetail from "./PostDetail";
import ProductCard from "./ProductCard";
import articles from "../services/article";

const DetailPost = () => {
  const params = useParams();
  const item = articles.filter(
    (element) => element.title === params.productName
  );
  return (
    <PostDetail>
      <div className=" flex justify-center mx-4">
        <ProductCard item={item[0]} />
      </div>
    </PostDetail>
  );
};

export default DetailPost;
