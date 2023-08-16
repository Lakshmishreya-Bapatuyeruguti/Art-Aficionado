import "./App.css";
import { WagmiConfig } from "wagmi";
import { config } from "./utils/wagmi-configuration";
function App() {
  return (
    <WagmiConfig config={config}>
      <div className="App bg-slate-50 ">Art Aficionado</div>
    </WagmiConfig>
  );
}

export default App;
