import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";

const VideoPlayer = ({ videoInfo }) => {
  const { url, thumbnail } = videoInfo;
  const video = useRef(null);

  return (
    <View>
      {/* Videoplayer */}
      <Video
        ref={video}
        source={{
          uri: url,
        }}
        usePoster={false}
        posterSource={{ uri: thumbnail }}
        posterStyle={{ resizeMode: "cover" }}
        style={styles.videoPlayer}
        resizeMode="contain"
        useNativeControls
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});
