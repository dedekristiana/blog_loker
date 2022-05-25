import Layout from "./Layout";
import { useState } from "react";
import articles from "../services/article";
import categories from "../services/category";
import InfoPost from "./InfoPost";

const Home = () => {
  const [article, setArticle] = useState(articles);

  const handleCategories = (e) => {
    const articleSelected = e.target.id;
    const articleCategory = articles.filter(
      (item, index) => item.category === articleSelected
    );
    setArticle(articleCategory);
  };

  // const categories = [];
  // articles.map((item, index) => {
  //   if (categories.indexOf(item.category) === -1)
  //     categories.push(item.category);
  // });

  return (
    <Layout>
      {/* Apa saya harus membuat seperti ini jadi event haandle dan variable yg sudah terisi kategori di jadiin satu.. supaya jalan */}
      <div className="mt-10">
        <div className="text-center mb-4 uppercase">
          <h2>Category</h2>
        </div>
        <ul className="flex justify-center gap-10">
          {categories.map((item, index) => {
            return (
              <li
                className="hover:underline cursor-pointer"
                onClick={(e) => handleCategories(e)}
                id={item}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-wrap mt-10">
        {/* looping article */}
        {article.map((item, index) => {
          return <InfoPost item={item} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;
