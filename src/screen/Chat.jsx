import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import Svg, { Defs, G, Path, Rect } from "react-native-svg";

const Chat = () => {
  const truncate = (str, maxLength) => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + "...";
  };

  return (
    <PageWrapper>
      <View className="flex-row items-center justify-between h-12">
        <Text className="text-[#F7F7FC] text-lg font-semibold">Chat</Text>
        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="#F7F7FC" />
              <Path
                d="M21 12H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17V5H12V3H5C3.89543 3 3 3.89543 3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V12Z"
                fill="#F7F7FC"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M15 19.411L12.3 16.711L13.714 15.295L15 16.583L20.008 11.583L21.419 13L15 19.41V19.411ZM11 17H2V15H11V17ZM15 13H2V11H15V13ZM15 9H2V7H15V9Z"
                fill="#F7F7FC"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-[108px] border-b-[0.5px] border-[#3d3d3d] my-4">
        <View className="flex-row w-full h-full items-center gap-x-4">
          <View className=" gap-y-1">
            <TouchableOpacity className="border border-[#ADB5BD] rounded-[16px] w-14 aspect-square justify-center items-center">
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
            </TouchableOpacity>
            <Text className="text-[#F7F7FC] font-light text-[10px] text-center">
              your story
            </Text>
          </View>
          <View className="gap-y-1">
            <TouchableOpacity className="border border-[#ADB5BD] rounded-[16px] w-14 aspect-square justify-center items-center">
              <Image
                className="h-full w-full p-[1px] rounded-[16px]"
                source={{
                  uri: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
                }}
              />
            </TouchableOpacity>
            <Text className="text-[#F7F7FC] font-light text-[10px] text-center">
              {truncate("Durga Khanal", 10)}
            </Text>
          </View>

          <View className="gap-y-1">
            <TouchableOpacity className="border border-[#ADB5BD] rounded-[16px] w-14 aspect-square justify-center items-center">
              <Image
                className="h-full w-full p-[1px] rounded-[16px]"
                source={{
                  uri: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
                }}
              />
            </TouchableOpacity>
            <Text className="text-[#F7F7FC] font-light text-[10px] text-center">
              {truncate("Durga Khanal", 10)}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center justify-between h-9 bg-[#ADB5BD36] rounded-md mb-4">
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
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <TouchableOpacity
            key={i}
            className="flex-row justify-between items-center my-4 h-16"
          >
            <View className="flex-1">
              <View className="flex-row gap-x-3 h-14">
                <View className="h-full aspect-square relative">
                  <Image
                    source={{
                      uri: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
                    }}
                    className="h-full aspect-square rounded-[16px]"
                  />
                  <View className="w-3 aspect-square rounded-full bg-green-600 absolute top-1 -right-[6px] border border-[#ADB5BD]" />
                </View>
                <View className="gap-y-1 justify-center">
                  <Text className=" text-[#F7F7FC]">Durga Khanal</Text>
                  <Text className="text-[#ADB5BD] text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </View>
              </View>
            </View>
            <View className="gap-y-1">
              <Text className="text-[#ADB5BD] text-[10px]">Today</Text>
              <View className="bg-[#D2D5F9] rounded-full h-5 aspect-square justify-center items-center">
                <Text className="text-[#001A83] text-xs">2</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </PageWrapper>
  );
};

export default Chat;
