import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Chapter1 = () => (
  <Layout style={styles.layout}>
    <Text style={styles.title} category='h6'>About</Text>
    <Text style={styles.body}>
      Danielle Tarantola is a Yoga Therapist and Teacher Trainer in the lineage of Krishnamacharya and Desikachar. She is the Founder/Director of Yoga Foundation and began teaching chanting in 2001.
    </Text>
    <Text style={styles.body}>
      Chanting the Yoga Sūtra-s of Patanjali is a pre-requisite to study and transformation through Yoga, and this app is meant to be an adjunct to learning with a qualified teacher, a means to review what you have learned or enjoy a powerful listening experience. For more information on learning Vedic Chanting and Yoga Sūtra chanting, contact Danielle at yoga-foundation.com. IG: yoga_foundation FB: YogaFoundationNY
    </Text>
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
    marginTop: 10
  }
})

export default Chapter1
