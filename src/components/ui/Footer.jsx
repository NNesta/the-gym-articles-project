import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../features/newsSlice";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#2E2F41] py-4 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold px-4">Explore the NEWS</h1>
        <div className="flex flex-col justify-center">
          <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between items-center gap-4 my-4 px-8">
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
                className={`text-base font-medium hover:text-blue-300 hover:underline 
            `}
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

          <ul className=" flex flex-col md:flex-row md:items-center gap-12 my-4 px-8 py-4">
            {[
              { title: "Terms of Use", link: "terms" },
              { title: "About the News", link: "about" },
              { title: "Privacy Policy", link: "privacy" },
              { title: "Contact the BBC", link: "contact" },
            ].map((item, index) => (
              <li className="hover:text-blue-300 hover:underline" key={index}>
                <Link className="" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="px-8">
            Copyright The News <span>&#169;</span> 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
