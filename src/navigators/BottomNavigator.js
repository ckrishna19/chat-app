import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../screen/Chat";
import Tabs from "../components/Tabs";
import People from "../screen/People";
import More from "../screen/More";
const BottomNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <Tabs {...props} />}
    >
      <Screen name="Chat" component={Chat} />
      <Screen name="People" component={People} />
      <Screen name="More" component={More} />
    </Navigator>
  );
};

export default BottomNavigator;
