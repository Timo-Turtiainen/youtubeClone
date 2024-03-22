import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useRef, useCallback } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import VideoPlayer from "../components/video/VideoPlayer";
import Description from "../components/Description";
import CommentList from "../components/comment/CommentList";

const VideoScreen = ({ route }) => {
  const receivedData = route.params?.dataToSend;

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

  /* Bottom sheet Modal */
  const bottomSheetRef = useRef(null);
  const snapPoints = ["72.4%"]; // ATM Bottom Sheet does not stop on Video Component

  // callbacks
  const handleSheetChanges = useCallback((index) => {}, []);

  const openDescription = () => {
    bottomSheetRef.current?.present();
  };

  const closeDescription = () => {
    bottomSheetRef.current?.close();
  };

  /* Views abbreviation  */
  let viewsString = receivedData.views.toString();
  if (receivedData.views >= 1_000_000) {
    viewsString = (receivedData.views / 1_000_000).toFixed(0) + " milj.";
  } else if (receivedData.views > 1_000) {
    viewsString = (receivedData.views / 1_000).toFixed(1) + " t. katselukertaa";
  }
  /* Calculate upload duration */
  const currentTime = Date.now();
  const uploadTime = Date.parse(receivedData.uploadedAt);
  const durationInMilliseconds = currentTime - uploadTime;

  const seconds = Math.floor(durationInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  /* Uploaded since */
  let uploadedSinceString;
  if (years >= 1) {
    uploadedSinceString = `${years.toString()} v sitten`;
  } else if (months >= 1) {
    uploadedSinceString = `${months.toString()} kk sitten`;
  } else if (weeks >= 1) {
    uploadedSinceString = `${weeks.toString()} v sitten`;
  } else if (days >= 1) {
    uploadedSinceString = `${days.toString()} p sitten`;
  } else if (hours >= 1) {
    uploadedSinceString = `${hours.toString()} h sitten`;
  } else if (minutes >= 1) {
    uploadedSinceString = `${minutes.toString()} m sitten`;
  } else {
    uploadedSinceString = `${seconds.toString()} s sitten`;
  }

  /* Modify subscribers number */

  let subscribersString = receivedData.uploader.subscribers.toString();
  if (receivedData.uploader.subscribers >= 1_000_000) {
    subscribersString =
      (receivedData.uploader.subscribers / 1_000_000).toFixed(0) + " milj.";
  } else if (receivedData.uploader.subscribers > 1_000) {
    subscribersString =
      (receivedData.uploader.subscribers / 1_000).toFixed(1) + " t.";
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Video */}
        <VideoPlayer videoInfo={receivedData} style={styles.videoplayer} />
        <View>
          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            // enableDismissOnClose={true}
            enablePanDownToClose={true}
            backgroundComponent={({ style }) => (
              <View style={[style, { backgroundColor: "#252424" }]} />
            )}
            handleIndicatorStyle={styles.handleIndicator}
          >
            <Description
              description={receivedData}
              onPress={closeDescription}
            />
          </BottomSheetModal>
        </View>
        {/* Description -> Title -> Views -> uploadedAt ->   */}
        <Pressable
          onPress={openDescription}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={componentStyles}
        >
          <Text style={styles.title}>{receivedData.title}</Text>
          <View style={styles.descriptionRow}>
            <Text style={styles.views}>{viewsString}</Text>
            <Text style={styles.uploadedSince}>{uploadedSinceString}</Text>
            <Text>{}</Text>
          </View>
        </Pressable>

        {/* Content Creator Action Row */}
        <View style={styles.contentCreatorRow}>
          <Image
            style={styles.avatar}
            source={{ uri: receivedData.uploader.avatar }}
          />
          <View style={styles.contentCreatorRowWrapper}>
            <Text style={styles.contentCreatorText}>
              {receivedData.uploader.username}
            </Text>
          </View>
          <Text style={styles.subscribers}>{subscribersString}</Text>
        </View>

        {/* Comments */}

        {/* Recomended Videos */}
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  videoplayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
    marginHorizontal: 5,
    marginTop: 5,
  },
  descriptionRow: {
    flexDirection: "row",
  },
  descriptionModal: {
    flex: 1,
    alignItems: "center",
  },
  contentCreatorRow: {
    flexDirection: "row",
  },
  contentCreatorRowWrapper: {
    flexDirection: "column",
    // paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginTop: 10,
    marginRight: 5,
    marginHorizontal: 5,
  },
  contentCreatorText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  views: {
    color: "#b6b3b3",
    padding: 5,
  },
  uploadedSince: {
    color: "#b6b3b3",
    padding: 5,
  },
  handleIndicator: {
    backgroundColor: "gray",
    width: 40,
    height: 5,
    borderRadius: 2,
  },
  subscribers: {
    color: "gray",
    fontSize: 12,
    padding: 5,
  },
});
