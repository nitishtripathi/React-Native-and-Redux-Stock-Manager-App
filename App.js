import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import NavigationMngr from "./Navigation/NavigationHandler";
import CryptoReducer from "./data/reducers/CryptoCurrency";

const rootReducer = combineReducers({
  cryptocurr: CryptoReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationMngr />
    </Provider>
  );
}
