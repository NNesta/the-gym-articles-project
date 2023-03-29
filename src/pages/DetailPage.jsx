import { useContext } from "react";
import { AppContext } from "../context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const DetailPage = () => {
  const { title } = useParams();
  const { data, isLoading } = useContext(AppContext);
  const article = !isLoading && data.find((article) => article.title === title);
  return (
    <div>
      <div className="max-w-[1280px] mx-auto ">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="bg-white w-full h-12 fixed top-0">
              <Link to="/" className="text-2xl font-bold text-blue-500">
                {"< Home"}
              </Link>
            </div>
            <div className="my-16">
              <img src={article.urlToImage} alt="" />
              <h1 className="text-5xl font-semibold text-center">
                {article.title}
              </h1>
              <p>Writen by {article.author}</p>
              <p>
                Published on {new Date(article.publishedAt).toLocaleString()}
              </p>
              <p className="my-4 text-lg">{article.description}</p>
              <Link
                to={article.url}
                className="bg-blue-500 text-white rounded-xl p-2 mt-32 text-center"
              >
                Read more
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
