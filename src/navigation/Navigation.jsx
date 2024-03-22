/* Import  */
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";

/* Import Components */
import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";
import ShortsScreen from "../screens/ShortsScreen";
import AddScreen from "../screens/AddScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Header from "../components/Header";

/* Create Stack  */
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Homestack",
        headerTitle: "",
        headerShown: false,

        //   header: (props) => <Header {...props} />,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="HomeScreen" component={BottomTabGroup} />
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

/* Create Bottom Tabs */
const BottomTab = createBottomTabNavigator();
const BottomTabGroup = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            let IconFamily = Ionicons;
            size = 26;

            if (route.name === "Koti") {
              iconName = focused ? "home" : "home-outline";
              IconFamily = Ionicons;
            } else if (route.name === "Shorts") {
              iconName = focused ? "easel" : "easel-outline";
              IconFamily = Ionicons;
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle" : "add-circle-outline";
              IconFamily = Ionicons;
              size = 37;
            } else if (route.name === "Tilaukset") {
              iconName = focused ? "folder-video" : "folder-video";
              IconFamily = Entypo;
            } else if (route.name === "Sinä") {
              iconName = focused ? "circle" : "circle";
              IconFamily = Entypo;
            }

            return <IconFamily name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "#9b9b9b",
          headerShown: false,
        };
      }}
    >
      <BottomTab.Screen name="Koti" component={HomeScreen} />
      <BottomTab.Screen name="Shorts" component={ShortsScreen} />
      <BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{ title: "" }}
      />
      <BottomTab.Screen name="Tilaukset" component={SubscribeScreen} />
      <BottomTab.Screen name="Sinä" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const Navigation = () => {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <HomeStack />
    </NavigationContainer>
  );
};

export default Navigation;
