import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import CryptoListItem from "./CryptoListItem";
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
