import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { changeCategory } from "../features/newsSlice";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useDate from "../hooks/useDate";

const HomeNavbar = () => {
  const { day, month, date, year } = useDate();
  const categoryRef = useRef(null);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.news);
  return (
    <div className="w-full h-20  flex items-center lg:gap-8 md:divide-x-2 divide-gray-400 justify-between md:border-b-2 border-gray-300 overflow-x-hidden">
      <div className="hidden md:block">
        <h1 className="text-3xl font-semibold">{day}</h1>
        <p>
          {month} {date}, {year}
        </p>
      </div>
      <div className="flex  items-center">
        <button
          className="p-2 hidden md:block"
          onClick={() => (categoryRef.current.scrollLeft -= 60)}
        >
          <MdOutlineArrowBackIos
            size={30}
            className="material-symbols-outlined   rounded-full p-2 bg-white"
          />
        </button>
        <div>
          <ul
            ref={categoryRef}
            className="w-screen px-8 flex items-center gap-2 text-black uppercase  overflow-x-scroll scrollbar-hide scroll-smooth"
          >
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
                className={`text-base font-medium hover:text-blue-300 hover:underline ${
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
        </div>
        <button
          className="p-2 hidden md:block"
          onClick={() => (categoryRef.current.scrollLeft += 60)}
        >
          <MdArrowForwardIos
            size={30}
            className="material-symbols-outlined rounded-full p-2 bg-white"
          />
        </button>
      </div>
    </div>
  );
};

export default HomeNavbar;
