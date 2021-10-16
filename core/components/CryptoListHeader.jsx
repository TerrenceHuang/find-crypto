import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { getColumns } from "../utils/CoinGecko";

const columns = getColumns();
const CryptoListHeader = ({ selectedColumn, direction, onPress }) => {
  return (
    <View style={styles.headerContainer}>
      {columns.map(({ key, text }, index) => (
        <TouchableOpacity
          key={key}
          style={index === 0 ? styles.nameColumn : styles.numberColumn}
          onPress={() => {
            onPress(key);
          }}
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
