import React from "react";
import Image from "./img";

export default function DishSearch({ data, onChange }) {
  const rootElRef = React.useRef(null);
  const [state, setState] = React.useState({
    all: [],
    filtered: [],
    expanded: false,
    text: "",
    dishName: null,
    dish: null,
    prevDish: null,
  });

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (rootElRef.current && !rootElRef.current.contains(event.target)) {
        setState((state) => ({
          ...state,
          filtered: state.all,
          expanded: false,
          text: state.dishName || "",
        }));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    setState((state) => ({ ...state, all: data, filtered: data }));
  }, [data]);

  function handleSelect(dishId) {
    const dish = state.all.find((d) => d.id === dishId);
    if (dish.name !== state.dishName) {
      setState({
        ...state,
        filtered: state.all,
        expanded: false,
        text: dish.name,
        dish,
        dishName: dish.name,
        prevDish: state.dish,
      });
      onChange(dish);
    }
  }

  function handleSearchOpen() {
    setState({ ...state, expanded: true });
  }

  function handleSearchChange(event) {
    setState({
      ...state,
      text: event.target.value,
      filtered: state.all.filter((d) =>
        d.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  }

  return (
    <div ref={rootElRef} className=" relative">
      <div className="h-[40px] relative bg-[#131823] rounded">
        <Image.SVG.Search className="absolute top-[12px] left-[12px]" />
        <input
          className="bg-transparent w-full h-full pl-[40px] text-white outline-none"
          placeholder="Search cousine"
          type="text"
          value={state.text}
          onChange={handleSearchChange}
          onFocus={handleSearchOpen}
        />
      </div>
      {state.expanded && (
        <div className="absolute top-[50px] p-[8px] bg-[#121826] w-full rounded shadow-lg">
          {state.filtered.length === 0 && (
            <div className="h-[36px] flex items-center text-gray-500 px-[12px]">
              Nothing Found
            </div>
          )}
          {state.filtered.map((d) => (
            <button
              key={d.name}
              className="flex items-center w-full h-[36px] px-[12px] hover:bg-[#181F30] rounded font-bai"
              onClick={() => handleSelect(d.id)}
            >
              <img
                className="w-[24px] h-[24px] mr-[6px]"
                src={Image.flag[d.origin]}
                alt=""
              />
              <div className="font-[500] text-[#fff]">{d.name}</div>
              <div className="flex-grow" />
              <div className="flex items-center gap-[10px]">
                <>
                  {d.difficulty === "Easy" && <Image.SVG.Difficulty.Easy />}
                  {d.difficulty === "Medium" && <Image.SVG.Difficulty.Medium />}
                  {d.difficulty === "Hard" && <Image.SVG.Difficulty.Hard />}
                </>
                <div className="font-[700] text-[#fff]">{d.difficulty}</div>
                <div className="h-[18px] border border-[#1F2A44]" />
                <div className="text-[14px] text-[#AEB5C1]">30min</div>
              </div>
            </button>
          ))}
          {state.prevDish && (
            <button
              className="block w-full h-[36px] text-left text-gray-400 px-[12px] hover:bg-[#181F30] rounded"
              onClick={() => handleSelect(state.prevDish.id)}
            >
              Prev: {state.prevDish.name}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
