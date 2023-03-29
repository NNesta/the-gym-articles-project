import { Link } from "react-router-dom";

const Navbar = ({ filter, setFilter }) => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row w-full lg:gap-80 items-center h-16 fixed top-0 z-50 inset-x-0 bg-white">
      <Link to="/" className="text-2xl font-bold text-blue-500">
        BUSINESS NEWS
      </Link>
      <input
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
        type="text"
        placeholder="Search for an article"
        className="flex-1 h-[80%] w-full lg:rounded-full px-12 border-blue-500 border-2 focus:outline-none"
      />
    </div>
  );
};

export default Navbar;
