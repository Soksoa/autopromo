import { StyleSheet } from 'react-native';
import {View, Text} from '@/components/Themed'

export default function CreateProjectPage({stepTitle, component: Component}) {

    return(
        <View style={styles.container}>
            <Text
                style={styles.title}
                className="text-purple-500 text-sm font-extrabold"
                >
                {stepTitle}
            </Text>
            <View style={styles.separator} />

        {Component && <Component />}
    
        </View>

    )    
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
  