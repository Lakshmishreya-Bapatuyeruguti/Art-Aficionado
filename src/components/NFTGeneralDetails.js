import React from "react";
import generalDetails from "../utils/nft-general-details.json";
function NFTGeneralDetails({ id }) {
  return (
    <div className="bg-white w-5/6 border-gray-300 border p-6 rounded-md">
      <h2 className="text-xl font-semibold">Details</h2>
      <hr className="my-4 border-gray-300" />
      <ul>
        <li className="flex justify-between text-lg">
          <span>Contract Address</span>
          <span className="text-blue-800">
            {generalDetails.contractAddress}
          </span>
        </li>
        <li className="flex justify-between text-lg">
          <span>Token Id</span>
          <span className="text-blue-800">{id}</span>
        </li>
        <li className="flex justify-between text-lg">
          <span>Token Standard</span>
          <span>{generalDetails.tokenStandard}</span>
        </li>
        <li className="flex justify-between text-lg">
          <span>Chain</span>
          <span>{generalDetails.chain}</span>
        </li>
      </ul>
    </div>
  );
}

export default NFTGeneralDetails;
