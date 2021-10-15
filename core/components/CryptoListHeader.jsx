import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { getColumns } from "../utils/CoinGecko";

const columns = getColumns();
// TODO: Touch the header column should trigger sorting and reload
const CryptoListHeader = () => {
  // TODO: Show upper arrow and lower arrow depends on sorting
  return (
    <View style={styles.headerContainer}>
      {columns.map(({ key, text }, index) => (
        <TouchableOpacity
          key={key}
          style={index === 0 ? styles.nameColumn : styles.numberColumn}
        >
          <Text style={index === 0 ? styles.nameText : styles.numberText}>
            {text}
          </Text>
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ffffff",
  },
  nameColumn: {
    flexBasis: 1,
    flexGrow: 1,
  },
  numberColumn: {
    flexBasis: 1,
    flexGrow: 1.5,
  },
  nameText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  numberText: {
    fontWeight: "bold",
    textAlign: "right",
  },
});
