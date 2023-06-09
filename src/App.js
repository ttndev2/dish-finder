import React from "react";
import DishMenu from "./DishMenu/DishMenu";

function App() {
  const backEl = React.useRef(null);
  const menuEl = React.useRef(null);

  React.useEffect(() => {
    menuEl.current.setAttribute("data-visibility", "visible");
    backEl.current.style.display = "block";
    setTimeout(() => {
      menuEl.current.style.transform = "translate(0, 0)";
    }, 500);
  }, []);

  function handleClose() {
    menuEl.current.setAttribute("data-visibility", "hidden");
    backEl.current.style.display = "none";
    menuEl.current.style.transform = "translate(600px, 0)";
  }

  return (
    <>
      <div
        ref={backEl}
        id="dish-finder-overlay"
        className="fixed top-0 left-0 w-screen h-screen z-[9999] hidden"
        onClick={handleClose}
      ></div>
      <div
        id="dish-finder-menu"
        ref={menuEl}
        className="w-[410px] h-[685px] fixed top-[10px] right-[10px] z-[9999] bg-[#0D1119] translate-x-[600px] transition-transform duration-200 rounded-[10px]"
      >
        <DishMenu />
      </div>
    </>
  );
}

export default App;
