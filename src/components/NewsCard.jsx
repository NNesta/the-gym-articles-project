import { Link } from "react-router-dom";
const NewsCard = ({ image, title, publisher }) => {
  return (
    <div className="py-4 border border-gray-200 rounded-lg my-4 mx-2 hover:shadow-3xl duration-300 ease-in-out gap-3 flex flex-col just px-2">
      <Link className="flex-1" to={`/detail/${encodeURIComponent(title)}`}>
        <img className=" object-cover max-h-80" src={image} alt="" />
      </Link>
      <Link to={`/detail/${encodeURIComponent(title)}`}>
        <h1 className="text-2xl font-medium hover:text-blue-500">{title}</h1>
      </Link>
      <Link
        to={`/${encodeURIComponent(publisher)}`}
        className="text-xs hover:text-blue-500"
      >
        Published by {publisher}
      </Link>
    </div>
  );
};

export default NewsCard;
