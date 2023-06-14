import React from "react";
import data from "./data.json";
import DishSearch from "./DishSearch";
import DishDetail from "./DishDetail";
import DishAddForm from "./DishAddForm";
import "./style.css";

export default function DishMenu() {
  const [state, setState] = React.useState({
    dishes: [],
    dish: null,
    addFormVisible: false,
  });

  React.useEffect(() => {
    setState({ ...state, dishes: data });
  }, []);

  function handleSelect(_dish) {
    setState({ ...state, dish: _dish });
  }

  function handleAddFormOpen() {
    setState({ ...state, addFormVisible: true });
  }

  function handleAddFormClose() {
    setState({ ...state, addFormVisible: false });
  }

  function handleDishAdd() {}

  return (
    <div className="flex rounded-[10px] overflow-hidden relative min-h-[400px]">
      <div className="bg-[#0D1119] w-full shrink-0 p-[24px] space-y-[24px]">
        <DishSearch data={state.dishes} onChange={handleSelect} />
        {state.dish && (
          <DishDetail dish={state.dish} onClickAdd={handleAddFormOpen} />
        )}
        {!state.dish && (
          <div className="text-white">
            Welcome! Please select a dish from the menu.
          </div>
        )}
      </div>
      <div
        className="bg-[#0D1119] w-full shrink-0 transition-transform top-[0px]"
        style={{
          transform: state.addFormVisible
            ? "translate(-100%, 0)"
            : "translate(0, 0)",
          position: state.addFormVisible ? "relative" : "absolute",
          left: state.addFormVisible ? "0" : "100%",
        }}
      >
        <DishAddForm onClose={handleAddFormClose} onAdd={handleDishAdd} />
      </div>
    </div>
  );
}
