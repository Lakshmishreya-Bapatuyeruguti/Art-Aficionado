import React from "react";
import { useNavigate } from "react-router-dom";

function NFTCard({ imgSrc, id }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30  p-4 w-64 rounded-lg shadow-md  relative overflow-hidden group hover:scale-105">
      <img src={imgSrc} alt="NFT Pic" className="w-full" />
      <div className="flex justify-between my-2">
        <h1 className="text-gray-900">Bored Ape</h1>
        <span className="bg-white shadow-sm shadow-white rounded-md  px-4 border-2 border-gray-100">
          #{id}
        </span>
      </div>

      <h1 className="text-gray-400">Last Price: {id * 0.01 + 0.5} ETH</h1>

      <button
        className="w-full bg-blue-500  px-4 py-2 mt-2 rounded-b-md absolute bottom-0 left-0 right-0 hidden group-hover:block text-white hover:bg-blue-600 transition"
        onClick={() => {
          navigate(`/nftdetail/${id}`);
        }}
      >
        View NFT
      </button>
    </div>
  );
}

export default NFTCard;
