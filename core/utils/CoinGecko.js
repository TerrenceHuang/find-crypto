import axios from "axios";

const coinGeckoAxios = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: { accept: "application/json" },
});

export const getCoinsMarkets = ({
  vsCurrency,
  perPage,
  page,
  order = "market_cap_desc",
}) => {
  return coinGeckoAxios.request({
    url: `/coins/markets?vs_currency=${vsCurrency}&per_page=${perPage}&page=${page}&order=${order}`,
    method: "GET",
  });
};

export const toSmallImageUrl = (imageUrl) => {
  return imageUrl.replace("large", "small");
};

export const getColumns = () => {
  return [
    { key: "id", text: "Coin" },
    { key: "current_price", text: "Price" }, // TODO: Fix the sorting key
    { key: "volume", text: "24h Volume" },
  ];
};

export default coinGeckoAxios;
