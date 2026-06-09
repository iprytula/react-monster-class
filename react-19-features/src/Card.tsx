import { use } from "react";
import { ThemeContext, type ThemeContextInterface } from "./themeContext";

const Card = () => {
  const context = use(ThemeContext);
  const { theme, toggleTheme } = context as ThemeContextInterface;

  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg mx-auto ${theme === "light" ? "bg-amber-50 text-black" : "bg-gray-900 text-white"}`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
      <button className="border-2 border-amber-900 cursor-pointer mx-auto block rounded-[10px] my-3 p-1" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Card;
