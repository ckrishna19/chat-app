import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import { StatusBar as ExpoBar } from "expo-status-bar";
const Wrapper = ({ children }) => {
  return (
    <View>
      <View className="bg-[#152033] flex-1 w-full h-full">{children}</View>
      <ExpoBar backgroundColor="#152033" style="light" />
    </View>
  );
};

export default Wrapper;
