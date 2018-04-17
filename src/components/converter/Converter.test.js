import React from "react";
import { mount, shallow } from "enzyme";
import { Converter } from "./Converter";

describe("Converter", () => {
  const mockFetchbitcoin = jest.fn();
  let props = { balance: 10, bitcoin: 10 };
  let converter = shallow(<Converter />);

  it("renders properly", () => {
    expect(converter).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchbitcoin;
      converter = mount(<Converter {...props} />);
    });

    it("dispatches the `fetchBitcoin()` method it receives from props", () => {
      expect(mockFetchbitcoin).toHaveBeenCalled();
    });
  });

  describe("when there are valid bitcoin props", () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: "1,000" } } } };
      converter = shallow(<Converter {...props} />);
    });

    it("displays the correct bitcoin value", () => {
      expect(converter.find("h3").text()).toEqual("Bitcoin balance: 0.01");
    });
  });
});
