import React, { useRef } from 'react';
import {Text, View} from '@/components/Themed'
import { StyleSheet, TextInput, Button} from 'react-native';
import PagerView from 'react-native-pager-view'
import PropertiesForm from '@/components/PropertiesForm';
import UploadSong from '@/components/UploadSong';

export default function CreateProjectScreen() {
  const pagerRef = useRef('null')

  return (
    <View style={styles.container}>
      <PagerView 
          ref={pagerRef} 
          style={styles.pagerView}
          initialPage={0}
          scrollEnabled={false}>
            
        <PropertiesForm key="1" pagerRef={pagerRef} />
        <UploadSong key="2" />
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagerView: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 4,
    color: 'white'
  },
});
