import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import CryptoListItem from "./CryptoListItem";

// TODO: Fake data need to remove and use the REST to get the real one
const DATA = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    current_price: 57793,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    current_price: 3656.33,
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    current_price: 480.11,
  },
];

const CryptoList = () => {
  const renderListItem = ({ item }) => {
    return <CryptoListItem {...item} />;
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderListItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CryptoList;
