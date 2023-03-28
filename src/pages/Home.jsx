import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AppContext } from "../context";

const Home = () => {
  const { data, isLoading } = useContext(AppContext);

  const { source } = useParams();
  const [viewData, setViewData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (!isLoading) {
      !source
        ? setViewData(data.articles.slice(0, 10))
        : setViewData(
            data.articles.filter((article) => article.source.name === source)
          );
    }
  }, [source, isLoading, data]);
  return (
    <div>
      <Navbar filter={filter} setFilter={setFilter} />
      <Wrapper styles="mt-[100px] relative">
        {isLoading ? (
          <div className="inline mx-auto text-center">
            <h1 className="text-4xl ">Loading...</h1>
          </div>
        ) : (
          <div className="flex gap-2 justify-end">
            <div className="max-w-[1280px] my-32 mx-auto grid lg:grid-cols-3 gap-3">
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

      <Footer />
    </div>
  );
};

export default Home;
