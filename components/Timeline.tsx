import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import generateClips from '@/utils/generateClips'
import formatTime from '@/utils/formatTime'

const Timeline = () => {
  const totalDuration = 60000; // Total duration of the video in miliseconds
  const bpm = 60 // Number of bpm, extracted from (project.json)
  
  const clips = generateClips(totalDuration, bpm); // Call the function and store the result

  console.log(clips[2].start);
  


  return (
    <View style={styles.timelineContainer}>
      <ScrollView horizontal>
        <View style={styles.timeline}>
        {clips.map((clip, index) => {
            // Calculate the width of each clip based on its duration
            const clipWidth = 100; // You can adjust this value to fit your needs
            const clipStart = formatTime(clips[index].start)

            return (
              <TouchableOpacity key={index} style={[styles.clip, { width: clipWidth }]}>
                <Text style={styles.clipTimestamp}>{clipStart}</Text>
                <Text style={styles.clipText}>{`Clip ${index + 1}`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  timelineContainer: {
    borderColor: '#FFF',
    borderWidth: 1,
    height: '20%',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  timeline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height: '100%',
  },
  clip: {
    height: '50%',
    width: 100,
    backgroundColor: '#616161',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  clipTimestamp: {
    position: 'absolute',
    left: 0,
    top: -20,
    color: "white"
  },

  clipText: {
    color: '#FFF',
  },
  
});

export default Timeline;
