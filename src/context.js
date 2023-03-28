import { createContext } from "react";
import { useQuery } from "react-query";

export const AppContext = createContext(null);

const Context = ({ children }) => {
  const { data, isLoading, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-03-24&sortBy=publishedAt&apiKey=9898f7aecfb84ac9b602ae868ddfa004"
    ).then((res) => res.json())
  );
  console.log({ isLoading, isFetching });
  return (
    <AppContext.Provider value={{ data, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
