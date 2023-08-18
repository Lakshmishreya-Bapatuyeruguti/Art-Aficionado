import { useEffect, useState } from "react";
import { useContractInfiniteReads, paginatedIndexesConfig } from "wagmi";
import abi from "../utils/collections-abi.json";
import NFTCard from "../components/NFTCard";
import Banner from "../components/Banner";
const boredApeContractConfig = {
  address: "0xE29F8038d1A3445Ab22AD1373c65eC0a6E1161a4",
  abi,
};
const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

function NFTCollection() {
  const [nfts, setNfts] = useState([]);
  const { data, fetchNextPage } = useContractInfiniteReads({
    cacheKey: "apettributes",
    ...paginatedIndexesConfig(
      (index) => {
        return [
          {
            ...boredApeContractConfig,
            functionName: "tokenURI",
            args: [index],
          },
        ];
      },
      { start: 0, perPage: 10, direction: "increment" }
    ),
  });
  console.log(data.pages[0]);

  useEffect(() => {
    async function fetchNFTImages() {
      const images = [];
      for (const nft of data.pages[0]) {
        const response = await fetch(
          `${IPFS_GATEWAY}${nft.result.replace("ipfs://", "")}`
        );
        const jsonData = await response.json();
        const imageLink = jsonData.image;
        images.push(`${IPFS_GATEWAY}${imageLink.replace("ipfs://", "")}`);
      }
      setNfts((prevNfts) => [...prevNfts, ...images]);
    }
    if (data.pages[0]) {
      fetchNFTImages();
    }
  }, [data.pages]);

  return (
    <>
      <Banner />
      <div className="flex flex-col ">
        <h1 className="text-2xl text-gray-700 p-6">Trending NFT's</h1>
        <div>
          <div className="ml-4 grid grid-cols-5 gap-4 ">
            {nfts.map((imageSrc, index) => (
              <NFTCard key={index} imgSrc={imageSrc} id={index} />
            ))}
          </div>
        </div>
        <button
          className="text-gray-800 text-xl p-4 mt-1 text-center"
          onClick={fetchNextPage}
        >
          Load More ↓
        </button>
      </div>
    </>
  );
}

export default NFTCollection;
