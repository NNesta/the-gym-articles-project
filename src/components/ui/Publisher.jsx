import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowPublishers } from "../../features/newsSlice";
import { useSelector } from "react-redux";
import { useGetAllNewsQuery } from "../../features/apiSlice";

const Publishers = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery(category);
  const data = response?.articles;
  const publishers = !isLoading
    ? Array.from(new Set(data.map((article) => article.source.name)))
    : [];

  return (
    <div className="border-primary py-6 border-t border-black bg-[#2E2F41] ">
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-between py-6 border-primary max-w-[1440px] mx-auto h-screen scrollbar-thin scrollbar-thumb-blue-500 overflow-y-scroll px-4 pb-20 my-12">
        {publishers?.map((publisher, index) => (
          <li key={index} className="text-lg font-medium ">
            <Link
              onClick={() => dispatch(setShowPublishers())}
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

export default Publishers;
