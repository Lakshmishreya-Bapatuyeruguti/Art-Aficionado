import React from "react";
import nftlogo from "../utils/images/nft_ad.png";

function Banner() {
  return (
    <div className=" h-72 w-full flex justify-center bg-slate-50 ">
      <div className="flex justify-between h-full w-full m-auto  ">
        <div className="text-center m-auto">
          <h1 className="text-gray-800 text-4xl py-4 font-semibold ">
            A Symphony of Creativity
          </h1>
          <h1 className="text-gray-500 text-xl font-thin">
            Embark on a visual adventure uniting artists gallery
          </h1>
          <h1 className="text-gray-500 font-thin text-xl ">
            and admirers in our art gallery
          </h1>
          <div className="bg-black text-white mt-4 p-2 rounded-lg w-40 m-auto ">
            Explore NFT's
          </div>
        </div>
        <img
          src="https://i.seadn.io/gcs/files/a15e1494749043f96f3c4d5bf11ee1e8.png?auto=format&dpr=1&w=1920"
          alt="nftbanner"
          className="rounded-lg h-60 w-1/2 m-auto bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30  "
        />
      </div>
    </div>
  );
}

export default Banner;
