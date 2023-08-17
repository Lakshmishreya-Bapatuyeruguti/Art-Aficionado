import { useEffect, useState } from "react";
import { useContractInfiniteReads, paginatedIndexesConfig } from "wagmi";
import abi from "../utils/collections-abi.json";

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
    <div>
      <h1>MLOOT NFT Attributes</h1>
      <div>
        <div>
          {nfts.map((imageSrc, index) => (
            <div key={index}>
              <img src={imageSrc} alt={`NFT ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={fetchNextPage}>Load More</button>
    </div>
  );
}

export default NFTCollection;
