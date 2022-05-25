// import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="md:w-4/12 p-4 ">
      <div className="">
        <img
          src={`/${item.image}`}
          alt="img"
          className="rounded-xl w-full mt-4"
        />
      </div>
      <div className=" ">
        <div className="flex items-center text-white/60 space-x-4 mt-4">
          <div className="uppercase">{item.category}</div>
          <span> &bull;</span>
          <div className="">{item.date}</div>
        </div>

        <h2 className="text-2xl mt-4">{item.title}</h2>

        <p className="text-white/60 mt-4">{item.shortDescription}</p>
        <p className="text-white/60 mt-4">{item.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
