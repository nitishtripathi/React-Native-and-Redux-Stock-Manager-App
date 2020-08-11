import {
  SET_CRYPTO,
  SEARCH_CRYPT,
  DELETE_CRYPT,
} from "../actions/CryptoCurrency";
import { ActionSheetIOS } from "react-native";

const initialState = {
  Cyrptocurrency: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CRYPT:
      return {
        ...state,
        Cyrptocurrency: state.Cyrptocurrency.filter(
          (delcrypt) => delcrypt.id !== action.productID
        ),
      };
    case SEARCH_CRYPT:
      return {
        ...state,
        Cyrptocurrency: state.Cyrptocurrency.concat(action.productsData),
      };
    case SET_CRYPTO:
      return {
        ...state,
        Cyrptocurrency: state.Cyrptocurrency.concat(action.products),
      };
  }
  return state;
};
