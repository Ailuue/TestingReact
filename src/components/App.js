import React, { Component } from "react";
import Wallet from "./wallet/Wallet";

class App extends Component {
  render() {
    return (
      <div>
        <h2>My Wallet</h2>
        <hr />
        <Wallet />
      </div>
    );
  }
}

export default App;
