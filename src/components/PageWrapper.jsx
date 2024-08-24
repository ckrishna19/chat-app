import { View, Text } from "react-native";
import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <View className="flex-1 bg-[#152033] pt-[2vh]">
      <View className="px-[5vw]">{children}</View>
    </View>
  );
};

export default PageWrapper;
