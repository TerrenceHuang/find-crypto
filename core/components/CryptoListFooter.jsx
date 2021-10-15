import React from "react";
import { ActivityIndicator, Platform } from "react-native";

const CryptoListFooter = ({ isLoading }) =>
  isLoading ? (
    <ActivityIndicator
      animating
      color={Platform.OS === "android" ? "#0000ff" : null}
      size="large"
    />
  ) : null;

export default CryptoListFooter;
