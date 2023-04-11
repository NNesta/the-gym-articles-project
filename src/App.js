import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:title" element={<DetailPage />} />
        <Route path="/:source" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
