import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Track from '../components/Track'

const lines = [
  'atha samādhi-pādaḥ',
  'atha yogānuśāsanam',
  'yogaḥ citta-vṛtti-nirodhaḥ',
  'tadā draṣṭuḥ svarūpe avasthānam',
  'vṛtti-sārūpyam itaratra',
  'vṛttayaḥ pañcatayyaḥ kliṣṭa-akliṣṭāḥ'
]

const mapLines = () => {
  return lines.map((line, index) => {
    return <Track line={line} lineIndex={`1-${index}`}/>
  })
}

const Chapter1 = () => (
  <Layout style={styles.layout}>
    <Text style={styles.title} category='h6'>Samādhi Pāda</Text>
    { mapLines() }
  </Layout>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1
  },
  title: {
    alignSelf: 'center',
    margin: 10,
    marginTop: 30
  }
})

export default Chapter1
