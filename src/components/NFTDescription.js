import React from "react";
import NFTGeneralDetails from "./NFTGeneralDetails";
import NFTAttributes from "./NFTAttributes";
import NFTValue from "./NFTValue";
import Loading from "./Loading";
function NFTDescription({ nft }) {
  console.log(nft);
  if (!nft) {
    return <Loading />;
  }
  return (
    <div className="h-screen max-lg:h-full w-full flex max-lg:flex-col max-lg:items-center max-lg:mt-4 bg-white">
      <div className=" h-screen max-lg:h-full w-3/4  flex flex-col justify-evenly items-center">
        <img src={nft.image} alt="nft" className="h-3/4 w-3/4 " />
        <button className="bg-blue-600 max-lg:my-4 text-white text-xl rounded-md p-2 w-3/4 h-20 max-lg:mb-4 hover:bg-blue-500">
          Buy Now
        </button>
      </div>
      <div className="h-full flex flex-col justify-evenly max-lg:flex-col max-lg:items-center  w-full">
        <h1 className="text-blue-800 font bold text-xl py-2 ">
          Bored Ape - {nft.id}
        </h1>
        <h1 className="text-black font bold text-2xl py-1">
          <span className="bg-white shadow-sm shadow-white rounded-md  px-4 border-2 border-gray-100">
            #{nft.id}
          </span>
        </h1>
        <h1 className="text-gray-800 font bold text-xl py-2">
          Owned By{" "}
          <span className="text-blue-800">
            {nft.owner && nft.owner.slice(0, 10)}...
          </span>
        </h1>

        <NFTGeneralDetails id={nft.id} />
        <NFTAttributes attributes={nft.attributes} />
        <NFTValue id={nft.id} />
      </div>
    </div>
  );
}

export default NFTDescription;
