import { StyleSheet, Button } from "react-native";
import {Link } from 'expo-router'
import {testApi} from '@/utils/testApi'

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "@/utils/colors";

export default function OverviewScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        className=" flex items-center justify-center scale-[3.0]"
      >
        Overview
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/welcome.tsx" />
      <Button title="Test api" onPress={testApi} />
      <Link href="/welcome" style={styles.link}>
          <Text style={styles.linkText}>Go to welcome page!</Text>
      </Link>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
