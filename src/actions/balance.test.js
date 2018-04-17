import * as types from "./constants";
import * as actions from "./balance";

describe("Actions", () => {
  it("creates an action to set the balance", () => {
    const balance = 0;

    const expectedAction = { type: types.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
  });

  it("create an action to deposit into the balance", () => {
    const deposit = 10;

    const expectedAction = { type: types.DEPOSIT, deposit };

    expect(actions.deposit(deposit)).toEqual(expectedAction);
  });

  it("creates an action to withdraw from the balance", () => {
    const withdrawal = 10;

    const expectedAction = { type: types.WITHDRAW, withdrawal };

    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
  });
});
