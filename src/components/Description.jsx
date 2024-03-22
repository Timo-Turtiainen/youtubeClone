import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const Description = ({ description, onPress }) => {
  const { title, likes, views, uploadedAt } = description;

  const monthNames = [
    "Tammik.",
    "Helmik.",
    "Maalisk.",
    "Huhtik.",
    "Toukok.",
    "Kesäk.",
    "Heinäk.",
    "Elok.",
    "Syysk.",
    "Lokak.",
    "Marrask.",
    "Jouluk.",
  ];
  const dateTime = new Date(uploadedAt);
  const year = dateTime.getFullYear();
  const day = dateTime.getDay();
  const month = monthNames[dateTime.getMonth()];
  return (
    <View>
      {/* Header Row */}
      <View style={styles.descriptionRow}>
        <View style={styles.descriptionRowWrapper}>
          <Text style={styles.header}>Kuvaus</Text>
          <Pressable onPress={onPress}>
            <EvilIcons name="close" size={40} color="#949494" />
          </Pressable>
        </View>
      </View>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
      {/* Likes, Views, Uploaded */}
      <View style={styles.infoRow}>
        <View style={styles.likesColumn}>
          <Text style={styles.infoText}>{likes}</Text>
          <Text style={styles.infoSubText}>Tykkäykset</Text>
        </View>
        <View>
          <Text style={styles.infoText}>{views}</Text>
          <Text style={styles.infoSubText}>Katselukerrat</Text>
        </View>
        <View>
          <Text style={styles.infoText}>{year}</Text>
          <Text style={styles.infoSubText}>{`${day} ${month}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  descriptionRow: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  descriptionRowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  likesColumn: {},
  infoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",

    marginTop: 10,
  },
  infoSubText: {
    color: "gray",
    fontSize: 16,
  },
});
