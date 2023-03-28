import { Link } from "react-router-dom";
const NewsCard = ({ image, title, publisher, url }) => {
  return (
    <Link
      className="py-4 first:col-span-2 gap-3 flex flex-col just px-2"
      to={`/detail/${title}`}
    >
      <img className="flex-1 object-cover" src={image} alt="" />
      <h1 className="text-3xl font-semibold hover:text-blue-500">{title}</h1>
      <p className="text-xs hover:text-blue-500">Published by {publisher}</p>
    </Link>
  );
};

export default NewsCard;
