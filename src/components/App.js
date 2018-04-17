import React from "react";
import Wallet from "./wallet/Wallet";
import Converter from "./converter/Converter";

const App = () => {
  return (
    <div>
      <h2>My Wallet</h2>
      <hr />
      <Wallet />
      <hr />
      <Converter />
      <div>
        Powered by{" "}
        <a
          href="https://www.coindesk.com/price"
          target="_blank"
          rel="noopener noreferrer"
        >
          coindesk
        </a>
      </div>
    </div>
  );
};

export default App;
