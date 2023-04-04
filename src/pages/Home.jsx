import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllNewsQuery } from "../features/apiSlice";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import NewsCard from "../components/newsCard";

const Home = () => {
  const { category } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery(category);
  const data = response?.articles;
  const { source } = useParams();
  const [filter, setFilter] = useState("");
  const viewData = !isLoading
    ? !source
      ? data.slice(0, 12)
      : data.filter((article) => article.source.name === source)
    : [];

  return (
    <div>
      <Navbar filter={filter} setFilter={setFilter} />
      <Wrapper styles="mt-16 relative">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex gap-2 justify-end">
            <div className="max-w-[1280px] my-16 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-3 px-4">
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
          </div>
        )}
      </Wrapper>
      {/* <DevTools /> */}
      <Footer />
    </div>
  );
};

export default Home;
