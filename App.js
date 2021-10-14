import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import CryptoList from "./core/components/CryptoList";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CryptoList />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
