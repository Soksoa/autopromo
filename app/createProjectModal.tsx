import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { createProject } from "@/utils/createProject";
import PagerView from 'react-native-pager-view';
import CreateProjectPage from "@/components/CreateProjectPage";
import ProjectInformationForm from "@/components/ProjectInformationForm";

export default function CreateProjectScreen() {


  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0}>
        <CreateProjectPage stepTitle={"Create new project"} component={ProjectInformationForm} />
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
      
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

  pagerView: {
    height: "100%",
    width: "100%",
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
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
