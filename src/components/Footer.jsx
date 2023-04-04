import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllNewsQuery } from "../features/apiSlice";

const Footer = () => {
  const { category } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery(category);
  const data = response?.articles;
  const publishers = !isLoading
    ? Array.from(new Set(data.map((article) => article.source.name)))
    : [];
  return (
    <div className="border-primary py-6 mt-12 border-t border-black">
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-between py-6 border-primary max-w-[1440px] mx-auto px-4">
        {publishers?.map((publisher, index) => (
          <li key={index} className="text-lg font-medium ">
            <Link
              className="hover:underline hover:text-blue-500"
              to={`/${encodeURIComponent(publisher)}`}
            >
              {publisher}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
