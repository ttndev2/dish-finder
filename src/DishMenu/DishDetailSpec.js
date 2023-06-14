import React from "react";

export default function DishDetail({ title, content, color }) {
  return (
    <div>
      <div className="text-[#7185AA] text-[13px]">{title}</div>
      <div className="flex font-[500]">
        <div className={`dish-material dish-material-${color}`}>{content}</div>
      </div>
    </div>
  );
}
