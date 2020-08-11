import CryptoCurrency from "../../models/CryptoCurrency";

export const SEARCH_CRYPT = "SEARCH_CRYPT";
export const DELETE_CRYPT = "DELETE_CRYPT";

export const deleteCrypt = (id) => {
  return { type: DELETE_CRYPT, productID: id };
};

export const searchCrypto = (name) => {
  return async (dispatch) => {
    // any async code you want!
    try {
      let url = "https://data.messari.io/api/v1/assets/" + name + "/metrics";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong. ");
      }
      const resData = await response.json();
      const addthisData = [];
      addthisData.push(
        new CryptoCurrency(
          resData["data"].id,
          resData["data"].name,
          resData["data"].symbol,
          resData["data"].market_data["price_usd"],
          resData["data"].market_data["percent_change_usd_last_24_hours"]
        )
      );
      dispatch({ type: SEARCH_CRYPT, productsData: addthisData });
    } catch (err) {}
  };
};
