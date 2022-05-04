import InfoPost from "./InfoPost";
import articles from "../services/article";

const FeaturedPost = () => {
  const item = articles;
  return <InfoPost item={item[6]} />;
};

export default FeaturedPost;
