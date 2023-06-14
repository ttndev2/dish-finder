import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              />
              {errors.name && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Name is required.
                </p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Origin
              </label>
              <select
                {...register("origin")}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none border-none ring-0 focus:ring-0 shadow-[0_0_0_1px_#5B6178] rounded-[6px] "
              >
                <option value="thailand">Thailand</option>
                <option value="india">India</option>
                <option value="vietnam">Vietnam</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="font-bai font-medium text-[16px] leading-[20px]">
              Description
            </label>
            <textarea
              {...register("description", { required: true, maxLength: 200 })}
              className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[80px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px] border-none ring-0 focus:ring-0"
            />
            <p className="text-[14px] mt-[6px] text-[#43495E]">
              {`${watch("description")?.length || 0}/200 Characters`}
            </p>
            {errors.description && (
              <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                Description is required.
              </p>
            )}
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Difficulty
              </label>
              <select
                {...register("difficulty", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none border-none ring-0 focus:ring-0 shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              {errors.difficulty && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Difficulty is required.
                </p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Protein
              </label>
              <input
                {...register("protein", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              />
              {errors.protein && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Protein is required.
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Produce
              </label>
              <input
                {...register("produce", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              />
              {errors.produce && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Produce is required.
                </p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Spice
              </label>
              <input
                {...register("spice", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              />
              {errors.spice && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Spice is required.
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Cooking Oil?
              </label>
              <input
                {...register("cookingOil", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              />
              {errors.cookingOil && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Cooking Oil is required.
                </p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Volume
              </label>
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
                  className="block w-full mt-[10px] text-white px-[11px] py-[8px] pr-[50px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
                />
                <span className="absolute flex items-center top-0 right-[11px] h-full">
                  <span className="font-bai text-[#E9EAF6] text-[14px] leading-[14px]">
                    gram
                  </span>
                </span>
              </div>
              {errors.volume && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Volume is invalid.
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-[12px]">
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Serves
              </label>
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
                  className="block w-full mt-[10px] text-white px-[11px] py-[8px] pr-[60px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
                />
                <span className="absolute flex items-center top-0 right-[11px] h-full">
                  <span className="font-bai text-[#E9EAF6] text-[14px] leading-[14px]">
                    people
                  </span>
                </span>
              </div>
              {errors.serves && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Serves is invalid.
                </p>
              )}
            </div>
            <div className="w-[50%]">
              <label className="font-bai font-medium text-[16px] leading-[20px]">
                Authenticity
              </label>
              <select
                {...register("authenticity", { required: true })}
                className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none border-none ring-0 focus:ring-0 shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
              >
                <option value="Unverified">Unverified</option>
                <option value="Verified">Verified</option>
              </select>
              {errors.authenticity && (
                <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                  Authenticity is required.
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="font-bai font-medium text-[16px] leading-[20px]">
              Stock
            </label>
            <input
              {...register("stock", { required: true })}
              className="block w-full mt-[10px] text-white px-[11px] py-[8px] h-[40px] bg-[#181F30] outline-none shadow-[0_0_0_1px_#5B6178] rounded-[6px]"
            />
            {errors.stock && (
              <p className="font-bai text-red-500 text-[12px] absolute mt-[2px]">
                Stock is required.
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="font-bai font-medium text-[16px] leading-[20px] mt-2 px-4 py-2 w-full h-[40px] bg-[#764AF4] hover:bg-[#5733C4] text-white rounded-[6px] cursor-pointer justify-center flex items-center"
              disabled={loading}
            >
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
