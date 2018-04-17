import React from "react";
import { shallow } from "enzyme";
import setupTests from "../setupTests";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a connected Wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });

  it("contains a connected Converter component", () => {
    expect(app.find("Connect(Converter)").exists()).toBe(true);
  });

  it("contains a link to attribute coindesk", () => {
    expect(app.find("a").props().href).toBe("https://www.coindesk.com/price");
  });
});
