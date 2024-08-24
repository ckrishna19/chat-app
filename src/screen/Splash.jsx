import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Wrapper from "../utils/Wrapper";
import PageWrapper from "../components/PageWrapper";
const Splash = () => {
  return (
    <PageWrapper>
      <View className="relative h-full">
        <Image
          source={require("../../assets/chat-image.png")}
          className="w-80 aspect-square border"
        />
        <Text className="text-white text-[24px] text-center">
          Connect easily with
        </Text>
        <Text className="text-white text-[24px] text-center">
          your family and friends
        </Text>
        <Text className="text-white text-[24px] text-center">
          over countries
        </Text>
        <View className="absolute bottom-10 left-0   w-full gap-y-4">
          <Text className="text-center text-white">Terms & Privacy Policy</Text>
          <TouchableOpacity className="bg-[#375FFF] h-14 justify-center items-center rounded-[30px]">
            <Text className=" text-white  font-semibold">Start Messeging</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageWrapper>
  );
};

export default Splash;
