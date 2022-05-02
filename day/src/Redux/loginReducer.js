import { LOGIN } from "./actions";
const init = { user: {} };

export const loginReducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, user: payload };
    default:
      return store;
  }
};