import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { getColumns } from "../utils/CoinGecko";

const columns = getColumns();
// TODO: Touch the header column should trigger sorting and reload
const CryptoListHeader = () => {
  // TODO: Show upper arrow and lower arrow depends on sorting
  return (
    <View style={styles.headerContainer}>
      {columns.map(({ key, text }) => (
        <TouchableOpacity key={key} style={styles.column}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CryptoListHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  column: {
    flexBasis: 1,
    flexGrow: 1,
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
