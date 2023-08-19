import React from "react";
import { useAccount, useConnect } from "wagmi";
import { useNavigate } from "react-router-dom";
function Header() {
  const { address, isDisconnected, isConnected, isConnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const navigate = useNavigate();
  return (
    <>
      <header className=" z-30 sticky top-0 bg-white bg-opacity-100 shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div
            className="text-xl font-semibold"
            onClick={() => {
              navigate("/");
            }}
          >
            Art Aficionado
          </div>
        </div>
        <div className="flex justify-between   w-1/2 space-x-4">
          <div className="flex border border-gray-400 w-3/4 bg-white bg-opacity-75 px-4 py-2 rounded-full  backdrop-blur-md max-md:hidden">
            <input
              type="text"
              placeholder="Search NFT's"
              className="bg-transparent outline-none w-full"
            />
            <svg
              className="h-5 w-5"
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g class="search-path" fill="none" stroke="#848F91">
                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
          </div>
          <button
            className="border border-gray-500 text-gray-800  hover:bg-slate-50 gap-1 px-4 py-2 rounded-full flex"
            onClick={() => connect({ connector: connectors[0] })}
          >
            {isDisconnected
              ? " Connect Wallet"
              : isConnecting
              ? "Connecting..."
              : `${isConnected && address && address.slice(0, 10)}... `}
            {isDisconnected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-wallet m-auto"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"
                  fill="#0d0c0c"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
