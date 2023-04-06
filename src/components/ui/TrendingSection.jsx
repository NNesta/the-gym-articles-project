import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useGetAllTrendingNewsQuery } from "../../features/apiSlice";
import Loading from "../Loading";
import TrendingCard from "../TrendingCard";

const TrendingSection = () => {
  const { source } = useParams();
  const { category } = useSelector((state) => state.news);
  const { filter } = useSelector((state) => state.news);
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetAllTrendingNewsQuery(category);
  const data = response?.articles;
  const viewNews = !isLoading
    ? !source
      ? data.slice(0, 10)
      : data.filter((article) => article.source.name === source)
    : [];
  return (
    <div>
      {viewNews.length ? (
        <div className="bg-[#EDEDED] w-full">
          <div className="flex items-center justify-between px-6">
            <h1 className="text-xl font-semibold py-4 px-2">WEEKLY TRENDING</h1>
            <HiOutlineAdjustmentsHorizontal />
          </div>
          <div className="h-full overflow-y-scroll scrollbar-hide">
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              viewNews
                .filter((item) =>
                  item.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((item, index) => (
                  <TrendingCard
                    key={index}
                    url={item.url}
                    image={item.urlToImage}
                    title={item.title}
                    publisher={item.source.name}
                    author={item.author}
                  />
                ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TrendingSection;
