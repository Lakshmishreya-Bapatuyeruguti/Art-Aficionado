import "./App.css";
import { WagmiConfig } from "wagmi";
import { config } from "./utils/wagmi-configuration";
import Login from "./components/Login";
import NFTCollection from "./pages/NFTCollection";
function App() {
  return (
    <WagmiConfig config={config}>
      <div className="App bg-slate-50 ">Art Aficionado</div>
      <Login />
      <NFTCollection />
    </WagmiConfig>
  );
}

export default App;
