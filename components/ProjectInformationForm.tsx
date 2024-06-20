import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View} from '@/components/Themed'

export default function ProjectInformationForm() {
    const [projectName, setProjectName] = useState('');

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Project Name:</Text>
            <TextInput
                style={styles.textInput}
                value={projectName}
                onChangeText={(text) => {
                    setProjectName(text);
                    console.log("Project Name:", text);
                }}
            />
            <View style={styles.separator} />
            <Text style={styles.title}>Description</Text>
            <TextInput
                style={styles.textInput}
                value={projectName}
                onChangeText={(text) => {
                    setProjectName(text);
                    console.log("Project Name:", text);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '80%',
        height: 'auto',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    textInput: {
        borderColor: '#FFF',
        borderWidth: 1,
        padding: 8,
        marginTop: 15,
        color: '#FFF'
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: "80%",
      },
});
