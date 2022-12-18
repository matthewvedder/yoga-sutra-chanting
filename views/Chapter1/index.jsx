import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, ScrollView } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Track from '../../components/Track'
import { LINES } from './constants'

const Chapter = () => {
  const [trackIndex, setTrackIndex] = useState(null)

  const mapLines = () => {
    return LINES.map((line, index) => {
      return (
        <Track
          line={line}
          lineIndex={`I.${index}`}
          key={`I.${index}`}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
        />
      )
    })
  }

  return (
    <Layout style={styles.layout}>
      <ScrollView style={styles.layout}>
        <Text style={styles.title} category='h6'>Samādhi Pādaḥ</Text>
        { mapLines() }
      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingBottom: 30

  },
  title: {
    alignSelf: 'center',
    margin: 10,
    marginTop: 20
  }
})

export default Chapter
