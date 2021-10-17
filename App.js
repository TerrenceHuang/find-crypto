import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  useWindowDimensions,
} from "react-native";

import CryptoList from "./core/components/CryptoList";

export default function App() {
  const window = useWindowDimensions();

  return Platform.OS === "web" ? (
    <View
      style={[
        styles.webContainer,
        window.width < 768
          ? styles.webContainerSmallWidth
          : styles.webContainerLargeWidth,
      ]}
    >
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
    padding: 20,
  },
  webContainerSmallWidth: {
    width: "100%",
  },
  webContainerLargeWidth: {
    width: 768,
    marginLeft: "auto",
    marginRight: "auto",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
