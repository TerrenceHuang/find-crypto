import React from "react";
import { ActivityIndicator, Platform } from "react-native";

const CryptoActivityIndicator = ({ isLoading }) =>
  isLoading ? (
    <ActivityIndicator
      animating
      color={Platform.OS === "ios" ? null : "#0000ff"}
      size="large"
    />
  ) : null;

export default CryptoActivityIndicator;
