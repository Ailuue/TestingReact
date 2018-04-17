import * as types from "./constants";

export const setBalance = balance => {
  return {
    type: types.SET_BALANCE,
    balance
  };
};

export const deposit = deposit => {
  return {
    type: types.DEPOSIT,
    deposit
  };
};

export const withdraw = withdrawal => {
  return {
    type: types.WITHDRAW,
    withdrawal
  };
};
