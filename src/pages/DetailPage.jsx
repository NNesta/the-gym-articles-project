import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useGetAllNewsQuery } from "../features/apiSlice";

const DetailPage = () => {
  const { title } = useParams();
  const { category } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery(category);
  const data = response?.articles;
  const article = !isLoading && data.find((item) => item.title === title);
  if (!article && !isLoading) {
  }

  return (
    <div>
      <div className="max-w-[1280px] mx-auto ">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {article ? (
              <div>
                <div className="bg-white w-full h-12 fixed top-0">
                  <Link
                    to="/"
                    className="text-2xl font-bold text-blue-500 flex items-center gap-2"
                  >
                    <span class="material-symbols-outlined">arrow_back</span>
                    <span>Home</span>
                  </Link>
                </div>
                <div className="my-16">
                  <img src={article.urlToImage} alt="" />
                  <h1 className="text-5xl font-semibold text-center">
                    {article.title}
                  </h1>
                  <p>Writen by {article.author}</p>
                  <p>
                    Published on{" "}
                    {new Date(article.publishedAt).toLocaleString()}
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
            ) : (
              <div className="flex-col flex gap-4 items-center h-screen justify-center">
                <h1 className="text-3xl font-medium ">Article not found</h1>
                <Link
                  to="/"
                  className="flex items-center justify-center text-2xl text-blue-500 cursor-pointer"
                >
                  <span class="material-symbols-outlined">arrow_back</span>{" "}
                  <span>Return Home</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
