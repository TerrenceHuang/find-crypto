import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CryptoListItem = ({ name, current_price }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textColumn}>{name}</Text>
      <Text style={styles.textColumn}>{current_price}</Text>
    </View>
  );
};

export default CryptoListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textColumn: {
    flexBasis: 1,
    flexGrow: 1,
    textAlign: "center",
  },
});
