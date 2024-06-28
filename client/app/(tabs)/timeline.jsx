import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Timeline from "@/components/Timeline";

export default function TimelineTabScreen() {
  const duration = 1;
  const bpm = 120;
  const clips = [

    clip_1 = {
      start: 0,
      end: 0,
      clip: "path/to/clip"
    }
    // Add more clips as needed
  ];
  


  return (
    <View style={styles.container}>
      <View style={styles.container}></View>
      <Timeline bpm={120} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor:"red"
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
