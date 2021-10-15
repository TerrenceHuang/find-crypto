import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { toSmallImageUrl } from "../utils/CoinGecko";

const CryptoListItem = React.memo(
  ({ name, current_price, total_volume, image }) => {
    const smallImage = toSmallImageUrl(image);

    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.imageColumn}
          source={{
            uri: smallImage,
          }}
        />
        <Text style={styles.textColumn}>{name}</Text>
        <Text style={styles.textColumn}>{current_price}</Text>
        <Text style={styles.textColumn}>{total_volume}</Text>
      </View>
    );
  }
);

export default CryptoListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  imageColumn: {
    flexBasis: 1,
    flexGrow: 1,
    resizeMode: "contain",
  },
  textColumn: {
    flexBasis: 1,
    flexGrow: 2,
    textAlign: "center",
  },
});
