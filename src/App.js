import "./App.css";
import { WagmiConfig } from "wagmi";
import { config } from "./utils/wagmi-configuration";
import NFTCollection from "./pages/NFTCollection";

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFTDetails from "./pages/NFTDetails";
function App() {
  return (
    <WagmiConfig config={config}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NFTCollection />} />
          <Route path="/nftdetail/:id" element={<NFTDetails />} />
        </Routes>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
