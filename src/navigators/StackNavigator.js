import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screen/Splash";
import BottomNavigator from "./BottomNavigator";
const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      screenOptions={{ headerShown: false, backgroundColor: "yellow" }}
    >
      <Screen name="Tab" component={BottomNavigator} />
      <Screen name="Splash" component={Splash} />
    </Navigator>
  );
};

export default StackNavigator;
