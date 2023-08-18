import React from "react";

function NFTValue({ id }) {
  return (
    <div className="mt-2 bg-white border-gray-300 border p-6 rounded-md w-5/6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">
          Last Price:{" "}
          <span className="text-gray-600 font-thin text-lg">
            {id * 0.01 + 0.5} ETH
          </span>
        </div>
        <div className="flex items-center">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png"
            alt="eth"
            className="h-10 w-10"
          />
        </div>
      </div>
    </div>
  );
}

export default NFTValue;
