import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

const Footer = () => {
  const [publishers, setPublishers] = useState([]);
  const { data, isLoading } = useContext(AppContext);
  useEffect(() => {
    !isLoading &&
      setPublishers(
        Array.from(new Set(data.articles.map((article) => article.source.name)))
      );
  }, [data, isLoading]);
  console.log({ publishers });
  return (
    <div className="border-primary py-6 mt-12 border-t border-black">
      <ul className="grid lg:grid-cols-6 gap-6 justify-between py-6 border-primary max-w-[1440px] mx-auto">
        {publishers?.map((item, index) => (
          <li key={index} className="text-lg font-medium ">
            <Link
              className="hover:underline hover:text-blue-500"
              to={`/${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
