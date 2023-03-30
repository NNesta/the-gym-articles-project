import { createContext } from "react";
import { useQuery } from "react-query";

export const AppContext = createContext(null);

const Context = ({ children }) => {
  const { data, isLoading } = useQuery("repoData", () =>
    fetch(
      "https://news-proxy.netlify.app/api/everything?q=film&from=2023-03-24&sortBy=publishedAt&apiKey=9898f7aecfb84ac9b602ae868ddfa004"
    ).then((res) => res.json())
  );
  const contextValues = {
    data: isLoading
      ? undefined
      : Array.from(
          new Set(data.articles.map((article) => JSON.stringify(article)))
        ).map((article) => JSON.parse(article)),
    isLoading,
  };
  console.log(contextValues);
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default Context;
