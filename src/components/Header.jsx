import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.iconRow}>
        <Image
          source={require("../../assets/youtube.png")}
          style={{ width: 130, height: 50 }}
        />
        <View style={styles.rightHeader}>
          <Feather
            name="cast"
            size={25}
            color="white"
            style={styles.headerIcon}
          />
          <FontAwesome5
            name="bell"
            size={25}
            color="white"
            style={styles.headerIcon}
          />
          <Feather
            name="search"
            size={25}
            color="white"
            style={styles.headerIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  rightHeader: {
    marginRight: 5,
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  logo: {
    height: 20,
  },
  headerIcon: {
    paddingHorizontal: 8,
  },
});
