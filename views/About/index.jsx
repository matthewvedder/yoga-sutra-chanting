import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Chapter1 = () => (
  <Layout style={styles.layout}>
    <Text style={styles.title} category='h6'>About</Text>
    <Text style={styles.body}>hello</Text>
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
  },
  body: {
    margin: 20,
    marginTop: 30
  }
})

export default Chapter1
