import "react-native-gesture-handler";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

/* Import components */
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
