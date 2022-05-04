import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import info from "../services/info";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  // const [article, setArticle] = useState(articles);

  const dropdownlist = [
    { text: "Tempat Wisata", href: "#" },
    { text: "Kuliner ", href: "#" },
  ];

  // const categories = [];
  // articles.map((item, index) => {
  //   if (categories.indexOf(item.category) === -1)
  //     categories.push(item.category);
  // });

  // const handleCategories = (e) => {
  //   const articleSelected = e.target.id;
  //   const articleCategory = article.filter(
  //     (item, index) => item.category === articleSelected
  //   );
  //   setArticle(articleCategory);
  // };

  return (
    // <nav className="py-10">
    <div className="flex items-center py-10 px-4">
      <div className="w-4/12 md:hidden">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuOutlined />
        </button>
      </div>
      <div className="md:w-2/12 flex items-center ">
        <Link to="/">
          <span className="w-10 h-10 bg-slate-500 rounded flex items-center justify-center mr-4 shadow-2xl">
            M
          </span>
        </Link>
        Mas min
      </div>
      <div
        className={`md:w-8/12  bg-gradient-to-b from-slate-600 to-slate-800 md:bg-none p-10 md:p-0 w-full top-0 h-full md:h-auto fixed md:static transition-all ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <button
          className="absolute top-10 right-10 md:hidden"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseOutlined />
        </button>
        <ul className="flex md:space-x-14 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* map kategori */}
          {info.map((item, index) => {
            return <li className="">{item}</li>;
          })}
          <li
            className="relative hover:underline cursor-pointer"
            onClick={() => setDropdown(!dropdown)}
          >
            Lainnya
            {dropdown && (
              <ul className="absolute bg-slate-800 w-48 rounded shadow-2xl mt-4">
                {dropdownlist.map(({ text, href }) => (
                  <li>
                    <a
                      href={href}
                      className="py-3 px-6 border-b border-white/10 flex hover:bg-slate-700/60"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className=" absolute -top-16 md:w-2/12 md:top-0 md:static">
        <input
          className="  bg-slate-700 py-3 px-6 w-full rounded-full"
          placeholder="Search ..."
        />
      </div>
    </div>
    // </nav>
  );
};

export default Navbar;
