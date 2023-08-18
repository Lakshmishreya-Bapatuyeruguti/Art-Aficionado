import React from "react";

function NFTAttributes({ attributes }) {
  return (
    <div className="mt-2 bg-white w-5/6 border-gray-300 border p-6 rounded-md">
      <h2 className="text-xl font-semibold">Traits</h2>
      <hr className="my-4 border-gray-300" />
      <div className="grid grid-cols-3 gap-2">
        {attributes &&
          attributes.map((attribute, index) => (
            <div
              key={index}
              className="bg-slate-200 p-2 rounded-md flex flex-col items-center justify-between"
            >
              <span className="font-semibold text-lg max-md:text-[10px]">
                {attribute.trait_type}
              </span>
              <span className=" text-md max-md:text-[10px]">
                {attribute.value}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NFTAttributes;
