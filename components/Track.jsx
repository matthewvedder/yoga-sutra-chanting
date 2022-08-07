import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Layout, Text } from '@ui-kitten/components';
import { Audio } from 'expo-av';
import paths from '../trackpaths'

const PlayIcon = (props) => <Icon style={styles.icon} {...props} name='play-circle'/>

export default function Track(props) {
  const [sound, setSound] = React.useState();
  console.log(paths)

  async function playSound() {
    console.log('Loading Sound');
    console.log('test', paths)
    const { sound } = await Audio.Sound.createAsync(
       paths[props.lineIndex]
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <Layout style={styles.layout}>
      <Button style={styles.button} accessoryLeft={PlayIcon} onPress={playSound} appearance='ghost' size='large' />
      <Text>{ props.line }</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  button: {
  },
  layout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
