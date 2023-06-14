import React from "react";
import axios from "axios";
// import data from "./data.json";
import DishSearch from "./DishSearch";
import DishDetail from "./DishDetail";
import DishAddForm from "./DishAddForm";
import "./style.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function DishMenu() {
  const [state, setState] = React.useState({
    dishes: [],
    dish: null,
    addFormVisible: false,
  });

  // React.useEffect(() => {
  //   setState({ ...state, dishes: data });
  // }, [state]);

  React.useEffect(() => {
    async function fetchData() {
      var config = {
        method: "get",
        url: `${API_URL}/recipes`,
        headers: {},
      };

      try {
        const response = await axios(config);
        setState({ dish: null, addFormVisible: false, dishes: response.data });
      } catch (e) {}
    }
    fetchData();
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

  async function handleAddDish(data) {
    var config = {
      method: "post",
      url: `${API_URL}/recipes`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios(config);
    if (response.status === 201) {
      console.log(response.data);
      setState({
        ...state,
        addFormVisible: false,
        dish: response.data,
        dishes: [...state.dishes, response.data],
      });
    }
  }

  return (
    <div className="flex rounded-[10px] overflow-hidden relative min-h-[400px]">
      <div className="bg-[#0D1119] w-full shrink-0 p-[24px] space-y-[24px]">
        <DishSearch data={state.dishes} onChange={handleSelect} />
        {state.dish && (
          <DishDetail dish={state.dish} onClickAdd={handleAddFormOpen} />
        )}
        {!state.dish && (
          <div className="text-white">
            Welcome! Please select a dish from the menu. <br />
            <div className="mt-1">
              You can also{" "}
              <button className="text-blue-500" onClick={handleAddFormOpen}>
                add new recipe.
              </button>
            </div>
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
        <DishAddForm onClose={handleAddFormClose} onAdd={handleAddDish} />
      </div>
    </div>
  );
}
