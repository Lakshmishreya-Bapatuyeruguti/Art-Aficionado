import "./App.css";
import { WagmiConfig } from "wagmi";
import { config } from "./utils/wagmi-configuration";
import NFTCollection from "./pages/NFTCollection";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFTDetails from "./pages/NFTDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <WagmiConfig config={config}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NFTCollection />} />
          <Route path="/nftdetail/:id" element={<NFTDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
