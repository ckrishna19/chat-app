import { StatusBar as ExpoBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: "#152033",
          flex: 1,
        }}
      >
        <StackNavigator />
        <ExpoBar backgroundColor="#152033" style="light" />
      </View>
    </NavigationContainer>
  );
}
