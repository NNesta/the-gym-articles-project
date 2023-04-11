import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllNewsQuery } from "../features/apiSlice";
import Wrapper from "../components/ui/Wrapper";
import Navbar from "../components/layout/Navbar";
import Loading from "../components/ui/Loading";
import NewsCard from "../components/ui/NewsCard";
import HomeNavbar from "../components/ui/HomeNavbar";
import TrendingSection from "../components/layout/TrendingSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  const { category } = useSelector((state) => state.news);
  const { filter } = useSelector((state) => state.news);
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetAllNewsQuery(category);

  const data = response?.articles;
  const { source } = useParams();
  const viewData = !isLoading
    ? !source
      ? data.slice(0, 6)
      : data.filter((article) => article.source.name === source)
    : [];
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      <Wrapper styles="relative max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-end  mt-20 py-16">
          <div className="max-w-5xl mr-auto  gap-3">
            <HomeNavbar />
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 h-full overflow-y-scroll scrollbar-hide">
                {viewData
                  .filter((item) =>
                    item.title.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((item, index) => (
                    <NewsCard
                      key={index}
                      url={item.url}
                      image={item.urlToImage}
                      title={item.title}
                      publisher={item.source.name}
                    />
                  ))}
              </div>
            )}
          </div>
          <TrendingSection />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Home;
