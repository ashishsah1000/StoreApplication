import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

export default function App() {
  // platform will give information about the os ios || android
  const checkPlatform = Platform.OS;
  console.log(checkPlatform);
  return (
    <SafeAreaView style={{ backgroundColor: "tomato" }}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
