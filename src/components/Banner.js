import React from "react";

function Banner() {
  return (
    <div className="h-72 lg:h-auto w-full flex justify-center  bg-slate-50 mb-2 max-md:h-fit">
      <div className="flex flex-col lg:flex-row justify-center h-auto w-full  mx-auto lg:m-auto ">
        <div className="text-center lg:text-left mx-auto lg:mx-0 lg:w-1/2 lg:pr-8 my-auto">
          <h1 className="text-gray-800 text-2xl lg:text-4xl py-2 lg:py-4 font-semibold text-center">
            A Symphony of Creativity
          </h1>
          <h1 className="text-gray-500 text-sm lg:text-xl font-thin text-center">
            Embark on a visual adventure uniting artists gallery
          </h1>
          <h1 className="text-center text-gray-500 text-sm lg:text-xl font-thin">
            and admirers in our art gallery
          </h1>
          <div className="bg-black text-center text-white mt-2 lg:mt-4 p-2 rounded-lg w-32 lg:w-40 mx-auto lg:mx-auto">
            Explore NFT's
          </div>
        </div>
        <img
          src="https://i.seadn.io/gcs/files/a15e1494749043f96f3c4d5bf11ee1e8.png?auto=format&dpr=1&w=1920"
          alt="nftbanner"
          className="rounded-lg h-60 w-1/2 m-auto bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 mt-4 lg:w-1/3 mb-4"
        />
      </div>
    </div>
  );
}

export default Banner;
