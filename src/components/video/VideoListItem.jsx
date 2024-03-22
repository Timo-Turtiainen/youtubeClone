import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const VideoListItem = ({ video }) => {
  const navigation = useNavigation();
  const dataToSend = video;
  const [isFocused, setFocused] = useState(false);

  const handlePressIn = () => {
    setFocused(true);
  };

  const handlePressOut = () => {
    setFocused(false);
  };

  const componentStyles = {
    backgroundColor: isFocused ? "#252424" : "black",
  };
  return (
    <SafeAreaView>
      {/* Card Container */}
      <Pressable
        onPress={() => {
          navigation.navigate("Video", { dataToSend });
        }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.videoCard, componentStyles]}
      >
        {/* Thumnail */}
        <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
        {/* Title Row */}
        <View style={styles.titleRow}>
          {/* Avatar */}
          <Image
            style={styles.avatar}
            source={{ uri: video.uploader.avatar }}
          />
          {/* Wrap Title & description  */}
          <View style={styles.textContainer}>
            {/* Title  */}
            <Text style={styles.title}>{video.title}</Text>
            {/* Description */}
            <Text style={styles.description}>{video.description}</Text>
            {/* Three Dots Icon for Menu */}
          </View>
          <Entypo
            style={styles.threeDotIcon}
            name="dots-three-vertical"
            size={24}
            color="white"
          />
          {/*  */}
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default VideoListItem;

const styles = StyleSheet.create({
  videoCard: {
    backgroundColor: "black",
    marginVertical: 5,
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginTop: 10,
    marginRight: 5,
  },
  titleRow: {
    flexDirection: "row",
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontWeight: "normal",
    fontSize: 18,
    color: "white",
    padding: 4,
  },
  description: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#c5c5c5",
    padding: 4,
  },
  threeDotIcon: {
    paddingTop: 10,
  },
});
