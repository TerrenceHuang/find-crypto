import axios from "axios";

const coinGeckoAxios = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: { accept: "application/json" },
});
export default coinGeckoAxios;

export const getCoinsMarkets = ({ vsCurrency, perPage, page }) => {
  return coinGeckoAxios.request({
    url: `/coins/markets?vs_currency=${vsCurrency}&per_page=${perPage}&page=${page}`,
    method: "GET",
  });
};

