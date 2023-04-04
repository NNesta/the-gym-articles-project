import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../features/newsSlice";
import { nanoid } from "nanoid";

const Navbar = ({ filter, setFilter }) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.news);
  return (
    <div className="w-full bg-white py-4 fixed top-0 z-50 inset-x-0  px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className=" gap-12 flex flex-col lg:flex-row items-center">
          <Link to="/" className="text-2xl font-bold text-blue-500">
            THE NEWS
          </Link>
          <ul className="flex items-center gap-2">
            {[
              { name: "All", value: "all", id: nanoid(10) },
              { name: "Business", value: "business", id: nanoid(10) },
              { name: "Movie", value: "movie", id: nanoid(10) },
              { name: "Sport", value: "sport", id: nanoid(10) },
              { name: "Music", value: "music", id: nanoid(10) },
              { name: "Politics", value: "politics", id: nanoid(10) },
              { name: "Technology", value: "technology", id: nanoid(10) },
              { name: "Entertainment", value: "entertainment", id: nanoid(10) },
              { name: "Finance", value: "finance", id: nanoid(10) },
            ].map((categoryObject) => (
              <li
                className={`text-lg font-medium hover:text-blue-300 hover:underline ${
                  categoryObject.value === category &&
                  "text-blue-500 underline scale-105"
                } `}
                key={categoryObject.id}
              >
                <Link
                  to="/"
                  onClick={() => dispatch(changeCategory(categoryObject.value))}
                >
                  {categoryObject.name}
                </Link>
              </li>
            ))}
          </ul>
          <input
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
            type="text"
            placeholder="Search for an article"
            className="flex-1 h-[80%] w-full rounded-full py-3 lg:px-12 px-4 border-blue-500 border-2 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
