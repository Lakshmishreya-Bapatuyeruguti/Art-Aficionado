import React, { useEffect, useState } from "react";
import NFTDescription from "../components/NFTDescription";
import abi from "../utils/collections-abi.json";
import { useParams } from "react-router-dom";
import { useContractReads } from "wagmi";
import Loading from "../components/Loading";
const boredApeContractConfig = {
  address: "0xE29F8038d1A3445Ab22AD1373c65eC0a6E1161a4",
  abi,
};
const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

function NFTDetails() {
  const [nft, setNft] = useState({});

  const { id } = useParams();
  const { data } = useContractReads({
    contracts: [
      {
        ...boredApeContractConfig,
        functionName: "tokenURI",
        args: [id],
      },
      {
        ...boredApeContractConfig,
        functionName: "ownerOf",
        args: [id],
      },
    ],
  });
  console.log(data);

  useEffect(() => {
    async function fetchNFTImages() {
      const response = await fetch(
        `${IPFS_GATEWAY}${data && data[0].result.replace("ipfs://", "")}`
      );
      const jsonData = await response.json();
      const imageLink = jsonData.image;
      const image = `${IPFS_GATEWAY}${imageLink.replace("ipfs://", "")}`;
      const attributes = jsonData.attributes;
      const owner = data[1].result;
      const nftDetail = {
        id,
        image,
        attributes,
        owner,
      };
      console.log(jsonData, "jddd");
      setNft(nftDetail);
    }
    fetchNFTImages();
  }, [data, id]);
  if (!data) {
    return <Loading />;
  }
  return <NFTDescription nft={nft} />;
}

export default NFTDetails;
