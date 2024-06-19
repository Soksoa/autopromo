import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import { createFolder } from "@/utils/createFolder";

export default function ProjectsTabScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        className="text-purple-500 text-sm font-extrabold"
      >
        Projects
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button onPress={createFolder} title="Create folder!" />
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
