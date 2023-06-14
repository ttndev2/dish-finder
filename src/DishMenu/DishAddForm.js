import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./DishAddForm.css";

export default function DishAddForm({ onClose, onAdd }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      await onAdd(data);
      reset();
    } catch (e) {
      if (e.name === "AxiosError") {
        setErrorMessage(e.response.data.message);
      } else {
        setErrorMessage(e.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#0D1119] p-[24px] rounded-[10px] w-[410px]">
      <div className="flex items-center">
        <button
          onClick={onClose}
          className="bg-transparent text-[#6B7280] rounded"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.41 17.09L10.83 12.5L15.41 7.91L14 6.5L8 12.5L14 18.5L15.41 17.09Z"
              fill="#6B7280"
            />
          </svg>
        </button>
        <h2 className="mb-0 ml-[10px] font-bai font-bold text-[18px] leading-[24px] text-white">
          Add new recipe
        </h2>
      </div>
      <hr className="mt-[16px] border-t border-[#2E3347]" />

      {errorMessage && (
        <div className="mt-[16px] text-red-500">{errorMessage}</div>
      )}

      <div className="flex items-center mt-[24px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white space-y-[24px] w-full"
        >
          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="dish-label">Name</label>
              <input
                {...register("name", { required: true })}
                className="dish-textfield"
              />
              {errors.name && <p className="dish-error">Name is required.</p>}
            </div>
            <div className="w-[50%]">
              <label className="dish-label">Origin</label>
              <select {...register("origin")} className="dish-select ">
                <option value="thailand">Thailand</option>
                <option value="india">India</option>
                <option value="vietnam">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="dish-label">Description</label>
            <textarea
              {...register("description", { required: true, maxLength: 200 })}
              className="dish-textarea"
            />
            <p className="text-[14px] mt-[6px] text-[#43495E]">
              {`${watch("description")?.length || 0}/200 Characters`}
            </p>
            {errors.description && (
              <p className="dish-error">Description is required.</p>
            )}
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="dish-label">Difficulty</label>
              <select
                {...register("difficulty", { required: true })}
                className="dish-select"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              {errors.difficulty && (
                <p className="dish-error">Difficulty is required.</p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="dish-label">Protein</label>
              <input
                {...register("protein", { required: true })}
                className="dish-textfield"
              />
              {errors.protein && (
                <p className="dish-error">Protein is required.</p>
              )}
            </div>
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="dish-label">Produce</label>
              <input
                {...register("produce", { required: true })}
                className="dish-textfield"
              />
              {errors.produce && (
                <p className="dish-error">Produce is required.</p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="dish-label">Spice</label>
              <input
                {...register("spice", { required: true })}
                className="dish-textfield"
              />
              {errors.spice && <p className="dish-error">Spice is required.</p>}
            </div>
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="dish-label">Cooking Oil?</label>
              <input
                {...register("cookingOil", { required: true })}
                className="dish-textfield"
              />
              {errors.cookingOil && (
                <p className="dish-error">Cooking Oil is required.</p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="dish-label">Volume</label>
              <div className="relative">
                <input
                  {...register("volume", {
                    required: true,
                    valueAsNumber: true,
                    pattern: {
                      value: /^[0-9]*$/,
                    },
                    validate: (value) => value > 0,
                  })}
                  className="dish-textfield pr-[50px]"
                />
                <span className="absolute flex items-center top-0 right-[11px] h-full">
                  <span className="font-bai text-[#E9EAF6] text-[14px] leading-[14px]">
                    gram
                  </span>
                </span>
              </div>
              {errors.volume && (
                <p className="dish-error">Volume is invalid.</p>
              )}
            </div>
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="dish-label">Serves</label>
              <div className="relative">
                <input
                  {...register("serves", {
                    required: true,
                    valueAsNumber: true,
                    pattern: {
                      value: /^[0-9]*$/,
                    },
                    validate: (value) => value > 0,
                  })}
                  className="dish-textfield pr-[60px]"
                />
                <span className="absolute flex items-center top-0 right-[11px] h-full">
                  <span className="font-bai text-[#E9EAF6] text-[14px] leading-[14px]">
                    people
                  </span>
                </span>
              </div>
              {errors.serves && (
                <p className="dish-error">Serves is invalid.</p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="dish-label">Authenticity</label>
              <select
                {...register("authenticity", { required: true })}
                className="dish-select"
              >
                <option value="Unverified">Unverified</option>
                <option value="Verified">Verified</option>
              </select>
              {errors.authenticity && (
                <p className="dish-error">Authenticity is required.</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="dish-label">Stock</label>
            <input
              {...register("stock", { required: true })}
              className="dish-textfield"
            />
            {errors.stock && <p className="dish-error">Stock is required.</p>}
          </div>

          <div>
            <button type="submit" className="dish-button" disabled={loading}>
              {loading ? (
                <div className="animate-spin w-4 h-4 border-t-2 border-white rounded-full" />
              ) : (
                "Add Recipe"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
