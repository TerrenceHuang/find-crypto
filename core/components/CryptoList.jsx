import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import CryptoListItem from "./CryptoListItem";

// TODO: Fake data need to remove and use the REST to get the real one
const DATA = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    current_price: 57793,
    total_volume: 39208187835,
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    current_price: 3656.33,
    total_volume: 22661498389,
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    current_price: 480.11,
    total_volume: 2903013490,
    image:
      "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
  },
];
import { getCoinsMarkets } from "../utils/CoinGecko";

const CryptoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCoinsMarkets({ vsCurrency: "usd", perPage: 25, page: 1 })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => alert(error));
  }, []);

  const renderListItem = ({ item }) => {
    return <CryptoListItem {...item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderListItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CryptoList;
