import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Layout, Text } from '@ui-kitten/components';
import { useAudioPlayer, useAudioPlayerStatus, setAudioModeAsync } from 'expo-audio';
import paths from '../trackpaths';

const PlayIcon = (props) => <Icon {...props} name='play-circle'/>;
const PauseIcon = (props) => <Icon {...props} name='pause-circle'/>;

export default function Track(props) {
  const player = useAudioPlayer(paths[props.lineIndex]);
  const status = useAudioPlayerStatus(player);

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true });
  }, []);

  useEffect(() => {
    if (props.trackIndex && props.trackIndex !== props.lineIndex) {
      player.pause();
    }
  }, [props.trackIndex]);

  const onPress = () => {
    props.setTrackIndex(props.lineIndex);
    if (status.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <Layout style={styles.layout}>
      <Button
        accessoryLeft={status.playing ? PauseIcon : PlayIcon}
        onPress={onPress}
        appearance='ghost'
        size='large'
      />
      <Text style={styles.text}>{ props.line }</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: 30,
    fontSize: 18,
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 10
  }
});
