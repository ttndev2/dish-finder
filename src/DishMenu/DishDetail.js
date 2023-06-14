import React from "react";
import Image from "./img";
import DishDetailSpec from "./DishDetailSpec";

export default function DishDetail({ dish, onClickAdd }) {
  return (
    <div className="space-y-[24px]">
      <div className="flex items-center">
        <img
          className="w-[24px] h-[24px]"
          src={Image.flag[dish.origin]}
          alt=""
        />
        <div className="text-sm text-white px-[8px] flex-grow">{dish.name}</div>
        <div className="flex items-center gap-[4px]">
          <a
            className="social-link"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image.SVG.Twitter />
          </a>
          <a
            className="social-link"
            href="https://t.me"
            target="_blank"
            rel="noreferrer"
          >
            <Image.SVG.Telegram />
          </a>
          <a
            className="social-link"
            href="https://medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image.SVG.Medium />
          </a>
          <button className="dish-btn" onClick={onClickAdd}>
            + Add receipe
          </button>
        </div>
      </div>
      <div className="bg-[#131823] rounded p-[10px]">
        <div
          className={`${
            dish.difficulty === "Hard" ? "bg-[#41479B]" : "bg-[#17CFC4]"
          }  rounded px-[20px] py-[10px] space-y-[16px] min-h-[188px]`}
        >
          <div
            className={`flex items-center gap-[10px] ${
              dish.difficulty === "Hard" ? "text-white" : "text-[#0D1119]"
            }`}
          >
            <img className="w-[32px] h-[32px]" src={Image.other.dish} alt="" />
            <div className="font-[700]">Difficulty: {dish.difficulty}</div>
          </div>
          <div
            className={`${
              dish.difficulty === "Hard" ? "text-white" : "text-[#0D1119]"
            } font-[400]`}
          >
            {dish.description}
          </div>
          {/* <a
            className="dish-view-recipe"
            href={dish.recipeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Full Recipe
          </a> */}
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#131823] rounded px-[24px] py-[12px] gap-[12px]">
        <DishDetailSpec title="Protein" content={dish.protein} color="white" />
        <DishDetailSpec
          title="Spice Level"
          content={dish.produce}
          color="red"
        />
        <DishDetailSpec title="Spices" content={dish.spice} color="orange" />
        <DishDetailSpec
          title="Cooking Oil"
          content={dish.cookingOil}
          color="orange"
        />
        <DishDetailSpec
          title="Volume/Weight"
          content={dish.volume + " grams"}
          color="white"
        />
        <DishDetailSpec
          title="Serves"
          content={dish.serves + " people"}
          color="white"
        />
        <DishDetailSpec
          title="Authenticity"
          content={dish.authenticity}
          color="orange"
        />
        <DishDetailSpec title="Stock" content={dish.stock} color="orange" />
      </div>
    </div>
  );
}
