import { legacy_createStore as createStore } from "redux";
import { loginReducer } from "./loginReducer";


export const store = createStore(
  loginReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
