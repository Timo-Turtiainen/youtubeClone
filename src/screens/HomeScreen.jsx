import { SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";

import VideoListItem from "../components/video/VideoListItem";
import initialData from "../../assets/data";
import Header from "../components/Header";

const HomeScreen = () => {
  const [data, setData] = useState(initialData);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={Header}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
