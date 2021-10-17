import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { toSmallImageUrl } from "../utils/CoinGecko";

const CryptoListItem = React.memo(
  ({ name, current_price, total_volume, image }) => {
    const smallImage = toSmallImageUrl(image);

    return (
      <View style={styles.itemContainer}>
        <View style={styles.nameColumn}>
          <Image
            style={styles.image}
            source={{
              uri: smallImage,
            }}
          />
          <Text style={styles.imageText}>{name}</Text>
        </View>
        <Text style={[styles.numberColumn, styles.numberText]}>
          ${current_price}
        </Text>
        <Text style={[styles.numberColumn, styles.numberText]}>
          {total_volume}
        </Text>
      </View>
    );
  }
);

export default CryptoListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
    borderBottomWidth: 0.3,
  },
  image: {
    alignSelf: "center",
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  imageText: {
    textAlign: "center",
  },
  nameColumn: {
    flexBasis: 1,
    flexGrow: 1,
  },
  numberColumn: {
    flexBasis: 1,
    flexGrow: 1.5,
  },
  numberText: {
    textAlign: "right",
  },
});
