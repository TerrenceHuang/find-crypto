import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { getColumns } from "../utils/CoinGecko";

const columns = getColumns();
const CryptoListHeader = ({
  selectedColumn,
  direction,
  onColumnPress,
  onSyncPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      {Platform.OS === "web" && (
        <TouchableOpacity
          onPress={() => {
            onSyncPress();
          }}
        >
          <Ionicons name="sync" size={20} />
        </TouchableOpacity>
      )}
      {columns.map(({ key, text }, index) => (
        <TouchableOpacity
          key={key}
          style={index === 0 ? styles.nameColumn : styles.numberColumn}
          onPress={() => {
            onColumnPress(key);
          }}
        >
          {selectedColumn === key && (
            <Ionicons
              name={
                direction === "asc"
                  ? "md-arrow-up-outline"
                  : "md-arrow-down-outline"
              }
              size={12}
            />
          )}
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
    paddingLeft: Platform.OS === "web" ? 0 : 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.2,
  },
  nameColumn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  numberColumn: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "flex-end",
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
