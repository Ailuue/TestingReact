import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../../actions/bitcoin";

export class Converter extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if (!bitcoin || Object.keys(bitcoin).length === 0) return "";

    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  }
  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()} coins</h3>
      </div>
    );
  }
}

export default connect(state => state, { fetchBitcoin })(Converter);
