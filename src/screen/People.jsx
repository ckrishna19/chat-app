import {
  View,
  Text,
  StatusBar,
  Platform,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import Svg, { Path } from "react-native-svg";
const People = () => {
  return (
    <PageWrapper>
      <View className="gap-y-4 w-full">
        <View className="flex-col">
          <View className={` h-[47px] items-center flex-row justify-between`}>
            <Text className="text-[#ADB5BD] text-xl">Contacts</Text>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z"
                fill="#ADB5BD"
              />
            </Svg>
          </View>
        </View>
        <View className="flex-row items-center justify-between h-9 bg-[#ADB5BD36] rounded-md">
          <View className="px-1 flex-row gap-x-1 items-center">
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M18.677 19.607L12.962 13.891C10.4196 15.6984 6.91642 15.2563 4.90285 12.8739C2.88929 10.4915 3.03714 6.96358 5.24298 4.75799C7.44824 2.55144 10.9765 2.40295 13.3594 4.4164C15.7422 6.42986 16.1846 9.93344 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 4.99997C7.58868 4.99955 5.95267 6.33066 5.56745 8.18742C5.18224 10.0442 6.15369 11.9163 7.89366 12.6702C9.63362 13.4242 11.6639 12.8528 12.7552 11.302C13.8466 9.75126 13.699 7.64731 12.402 6.26399L13.007 6.86399L12.325 6.18399L12.313 6.17199C11.5648 5.41917 10.5464 4.99712 9.48498 4.99997Z"
                fill="#ADB5BD"
              />
            </Svg>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#ADB5BD"
              className="text-[#ADB5BD] flex-1 py-1"
            />
          </View>
        </View>

        {Array(3)
          .fill(0)
          .map((_, i) => (
            <View
              key={i}
              className="border-b-[0.5px] border-[#ADB5BD] h-[76px] "
            >
              <View className="flex-row  h-full items-center gap-x-4 ">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s",
                  }}
                  className="w-12 aspect-square rounded-2xl"
                />
                <View className="gap-y-1">
                  <Text className="text-[#F7F7FC] text-sm font-semibold">
                    John Doe
                  </Text>
                  <Text className="text-[#ADB5BD]">last seen yesterday</Text>
                </View>
              </View>
            </View>
          ))}
      </View>
    </PageWrapper>
  );
};

export default People;
