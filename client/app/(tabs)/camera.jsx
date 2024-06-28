import { StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Video} from "expo-av"

export default function CameraTabScreen() {

  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [video, setVideo] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null)

  if (!permission) {
    // Camera permissions are still loading.
    return (
      <View />
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takeVideo = async () => {
    setIsRecording(true)
    if (cameraRef) {

      cameraRef.current.recordAsync({quality: "4:3"}).then((recordedVideo) => {
        setVideo(recordedVideo);
        console.log(recordedVideo);
        setIsRecording(false);
    }
  )}
}

const stopVideo = async () => {
  setIsRecording(false);
  cameraRef.current.stopRecording()
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  if (video) {
    console.log(`Displaying ${video}`)

    return (
      <View style={styles.container}>
        <Video
          style={styles.video}
          source={video}
          useNativeControls
          />
      </View>
    )
  }

  return (
    <CameraView style={styles.camera} facing={facing} mode="video" ref={cameraRef} videoQuality={"3:4"} >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={isRecording ? stopVideo : takeVideo}>
            <Text style={styles.text}>{isRecording ? "Stop recording" : "Record video"}</Text>
          </TouchableOpacity>
        </View>
      </CameraView >
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  camera: {
    flex: 1,
  },

  video: {
    width:"100%",
    height: "100%",
    backgroundColor: "white"
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },

  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
