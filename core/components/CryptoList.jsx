import React from "react";
import { View, Text } from "react-native";
import CryptoListItem from "./CryptoListItem";

const CryptoList = () => {
  return (
    <View>
      <Text>Crypto List</Text>
      <CryptoListItem />
    </View>
  );
};

export default CryptoList;
