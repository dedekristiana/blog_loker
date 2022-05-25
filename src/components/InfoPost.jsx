import { Link } from "react-router-dom";

function InfoPost({ item }) {
  return (
    <div className="p-4 md:flex">
      <Link to={item.title}>
        <div className="">
          <img
            src={`/${item.image}`}
            alt="info"
            className="rounded-xl w-full mt-4"
          />
        </div>
        <div className="pl-4">
          <div className="flex items-center text-white/60 space-x-4 mt-4">
            <div className="uppercase">{item.category}</div>
            <span> &bull;</span>
            <div className="">{item.date}</div>
          </div>

          <h2 className="text-2xl mt-4">{item.title}</h2>

          {/* <p className="text-white/60 mt-4">{item.shortDescription}</p> */}
        </div>
      </Link>
    </div>
  );
}

export default InfoPost;
