import React from "react";
import { ReactComponent as IconSearch } from "./search.svg";
import { ReactComponent as IconTwitter } from "./twitter.svg";
import { ReactComponent as IconTelegram } from "./telegram.svg";
import { ReactComponent as IconMedium } from "./medium.svg";
import { ReactComponent as IconLanguage } from "./language.svg";
import data from "./data.json";
import "./DishMenu.css";

export default function DishMenu() {
  const searchBoxRef = React.useRef(null);
  const [currentDishId, setCurrentDishId] = React.useState(null);
  const [prevDishId, setPrevDishId] = React.useState(null);
  const [searchExpanded, setSearchExpanded] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const currentDish = data.find((d) => d.id === currentDishId);
  const prevDish = data.find((d) => d.id === prevDishId);
  const filteredDishes = data.filter((d) =>
    d.title.toLowerCase().includes(searchText.toLowerCase())
  );

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setSearchExpanded(false);
        setSearchText(currentDish ? currentDish.title : "");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentDish]);

  function handleSelect(dishId) {
    const currentDish = data.find((d) => d.id === dishId);
    setPrevDishId(currentDishId);
    setCurrentDishId(dishId);
    setSearchText(currentDish.title);
    setSearchExpanded(false);
  }

  return (
    <div className="bg-[#0D1119] p-[24px] space-y-[24px] rounded-[10px]">
      <div ref={searchBoxRef} className="bg-[#131823] rounded relative">
        <div className="h-[40px] relative">
          <IconSearch className="absolute top-[12px] left-[12px]" />
          <input
            className="bg-transparent w-full h-full pl-[40px] text-white outline-none"
            placeholder="Search cousine"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setSearchExpanded(true)}
          />
        </div>
        {searchExpanded && (
          <div className="p-[12px] border-t border-gray-700 absolute bg-[#131823] w-[100%]">
            {filteredDishes.length === 0 && (
              <div className="text-gray-500 p-[4px]">No Result</div>
            )}
            {filteredDishes.map((d) => (
              <button
                key={d.title}
                className="block w-full text-left text-white p-[4px] hover:bg-gray-800"
                onClick={() => handleSelect(d.id)}
              >
                # {d.title}
              </button>
            ))}
            {prevDish && (
              <button
                className="block w-full text-left text-gray-400 p-[4px] hover:bg-gray-800"
                onClick={(event) => handleSelect(prevDishId)}
              >
                Prev: # {prevDish.title}
              </button>
            )}
          </div>
        )}
      </div>
      {currentDish && (
        <>
          <div className="flex items-center">
            <img className="w-[24px] h-[24px]" src={currentDish.flag} alt="" />
            <div className="text-sm text-white px-[8px] flex-grow">
              {currentDish.title}
            </div>
            <div className="flex items-center gap-[4px]">
              <a
                className="social-link"
                href={currentDish.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <IconTwitter />
              </a>
              <a
                className="social-link"
                href={currentDish.socialLinks.telegram}
                target="_blank"
                rel="noreferrer"
              >
                <IconTelegram />
              </a>
              <a
                className="social-link"
                href={currentDish.socialLinks.medium}
                target="_blank"
                rel="noreferrer"
              >
                <IconMedium />
              </a>
              <a
                className="social-link"
                href={currentDish.socialLinks.language}
                target="_blank"
                rel="noreferrer"
              >
                <IconLanguage />
              </a>
            </div>
          </div>
          <div className="bg-[#131823] rounded p-[10px]">
            <div className="bg-[#17CFC4] rounded px-[20px] py-[10px] space-y-[16px]">
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[32px] h-[32px]"
                  src={currentDish.image}
                  alt=""
                />
                <div className="font-[700]">
                  Difficulty: {currentDish.level}
                </div>
              </div>
              <div className="text-[#0D1119] font-[400]">
                Spanish paella is a traditional rice dish that originated in the
                Valencia region of Spain. It was originally made with
                ingredients such as saffron, rabbit, and snails, which were
                common in the area.
              </div>
              <a
                className="dish-view-recipe"
                href={currentDish.recipeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Full Recipe
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-[#131823] rounded px-[24px] py-[12px] gap-[12px]">
            {currentDish.ingredients.map((d) => (
              <div key={d.category}>
                <div className="text-[#7185AA] text-[13px]">{d.category}</div>
                <div className="flex font-[500]">
                  {d.materials.map((m) => (
                    <div
                      key={m.name}
                      className={`dish-material dish-material-${m.color}`}
                    >
                      {m.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {!currentDish && (
        <div className="text-white">
          Welcome! Please select a dish from the menu.
        </div>
      )}
    </div>
  );
}
