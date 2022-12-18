import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Layout, Text } from '@ui-kitten/components';
import { Audio } from 'expo-av';
import paths from '../trackpaths'

const PlayIcon = (props) => <Icon style={styles.icon} {...props} name='play-circle'/>
const PauseIcon = (props) => <Icon style={styles.icon} {...props} name='pause-circle'/>

export default function Track(props) {
  const [sound, setSound] = React.useState()
  const [isPlaying, setIsPlaying] = React.useState(false)


  async function playSound() {
    props.setTrackIndex(props.lineIndex)
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true })
    const { sound } = await Audio.Sound.createAsync(
       paths[props.lineIndex]
    );

    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    setSound(sound);

    if (isPlaying) {
      await sound.pauseAsync()
    } else {
      await sound.playAsync()
    }
  }

    const onPlaybackStatusUpdate = (playbackStatus) => {
      if (!playbackStatus.isLoaded) {
        // Update your UI for the unloaded state
        if (playbackStatus.error) {
          console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
          // Send Expo team the error on Slack or the forums so we can help you debug!
        }
      } else {
        // Update your UI for the loaded state

        if (playbackStatus.isPlaying) {
          setIsPlaying(true)
        } else {
          setIsPlaying(false)
        }

        if (playbackStatus.isBuffering) {
          // Update your UI for the buffering state
        }

        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          // The player has just finished playing and will stop. Maybe you want to play something else?
        }
      }
    }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (sound && props.trackIndex && (props.trackIndex !== props.lineIndex)) {
      sound.pauseAsync()
      setIsPlaying(false)
    }
  }, [props.trackIndex]);

  const getIcon = () => {
    return isPlaying ?  PauseIcon : PlayIcon
  }

  return (
    <Layout style={styles.layout}>
      <Button accessoryLeft={getIcon()} onPress={playSound} appearance='ghost' size='large' />
      <Text style={styles.text}>{ props.line }</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: 30
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 10
  }
});
