import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import * as Linking from "expo-linking";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Page</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
