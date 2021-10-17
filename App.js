import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";

import CryptoList from "./core/components/CryptoList";

export default function App() {
  return Platform.OS === "web" ? (
    <View style={styles.webContainer}>
      <CryptoList />
    </View>
  ) : (
    <SafeAreaView style={styles.safeArea}>
      <CryptoList />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    height: "100vh",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
