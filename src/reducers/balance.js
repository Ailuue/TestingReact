import * as types from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

const balance = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case types.SET_BALANCE:
      balance = action.balance;
      break;
    case types.DEPOSIT:
      balance = state + action.deposit;
      break;
    case types.WITHDRAW:
      balance = state - action.withdrawal;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }
  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balance;
