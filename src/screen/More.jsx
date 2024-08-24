import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import Svg, { Path } from "react-native-svg";
import Button from "../components/Button";
const More = () => {
  return (
    <PageWrapper>
      <Text className="text-[#F7F7FC] text-lg font-semibold my-4">More</Text>
      <View className="h-16 justify-center">
        <View className="flex-row justify-between items-center">
          <View className="h-12 flex-row gap-x-6">
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
              }}
              className="h-full aspect-square rounded-full"
            />
            <View>
              <Text className="text-[#F7F7FC] font-semibold leading-6 text-[14px]">
                Sirish Chalise
              </Text>
              <Text className="text-[#ADB5BD] text-[12px] leading-5">
                siris.chalise@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Svg
              width={28}
              height={28}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M15.713 12L9.70196 5.99001L8.28796 7.40401L12.888 12.004L8.28796 16.597L9.70196 18.011L15.713 12Z"
                fill="#F7F7FC"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View className="my-3">
        <Button
          Title="Account"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                fill="#F7F7FC"
              />
              <Path
                d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />
        <Button
          Title="Chats"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M8.05135 17.8285L8.70486 18.1778C9.71761 18.7193 10.8486 19.0017 11.997 19L12 19C15.8661 19 19 15.8661 19 12C19 8.13387 15.8661 5 12 5C8.13388 5 5.00001 8.13387 5.00001 12V12.003C4.99828 13.1514 5.28073 14.2824 5.82217 15.2951L6.17155 15.9486L5.63433 18.3657L8.05135 17.8285ZM3.00001 21L4.05841 16.2381C3.36139 14.9343 2.99778 13.4784 3.00001 12C3.00001 7.0293 7.02931 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21C10.5216 21.0022 9.06566 20.6386 7.76191 19.9416L3.00001 21Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />
      </View>
      <View className="mt-6 pb-10 border-b-[0.5px] border-[#F7F7FC] ">
        <Button
          Title="Apperence"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.998 22H10.998V19H12.998V22ZM18.362 19.778L16.241 17.657L17.655 16.243L19.777 18.365L18.364 19.778H18.362ZM5.63405 19.778L4.21905 18.364L6.33905 16.242L7.75405 17.656L5.63405 19.778ZM11.998 17.007C9.23302 17.0059 6.99231 14.7637 6.99305 11.9987C6.99378 9.23364 9.23568 6.99263 12.0007 6.993C14.7657 6.99337 17.007 9.23497 17.007 12C17.0043 14.7649 14.763 17.0053 11.998 17.007ZM11.998 8.993C10.3376 8.9941 8.99231 10.3409 8.99305 12.0013C8.99378 13.6618 10.3403 15.0074 12.0007 15.007C13.6612 15.0066 15.007 13.6605 15.007 12C15.0054 10.3392 13.6589 8.99355 11.998 8.993ZM21.998 13H18.998V11H21.998V13ZM4.99805 13H1.99805V11H4.99805V13ZM17.654 7.758L16.241 6.343L18.362 4.221L19.777 5.636L17.655 7.757L17.654 7.758ZM6.34105 7.758L4.22105 5.637L5.63605 4.223L7.75605 6.345L6.34205 7.757L6.34105 7.758ZM12.998 5H10.998V2H12.998V5Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />

        <Button
          Title="Notification"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.792 18 7.036 18 10.5V16L20 17V19ZM12 5.75C10.7797 5.6712 9.60278 6.21728 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16.0528 9.33639 15.7474 8.18458 15.125 7.2C14.3972 6.21728 13.2203 5.6712 12 5.75Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />

        <Button
          Title="Privacy"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12 3.19L19 6.3V11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19ZM12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />

        <Button
          Title="Data Usage"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />
      </View>
      <View className="my-3">
        <Button
          Title="Help"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12 6C10.9571 6.00132 9.95723 6.41622 9.21974 7.1537C8.48226 7.89118 8.06736 8.89104 8.06604 9.934H10.066C10.066 8.867 10.934 8 12 8C13.066 8 13.934 8.867 13.934 9.934C13.934 10.532 13.453 10.966 12.718 11.56C12.4779 11.7481 12.2473 11.948 12.027 12.159C11.029 13.156 11 14.215 11 14.333V15H13L12.999 14.367C13 14.351 13.032 13.981 13.44 13.574C13.59 13.424 13.779 13.274 13.975 13.116C14.754 12.485 15.933 11.532 15.933 9.934C15.9322 8.89106 15.5177 7.89104 14.7803 7.15347C14.0429 6.41591 13.043 6.00106 12 6ZM11 16H13V18H11V16Z"
                fill="#F7F7FC"
              />
              <Path
                d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />
        <Button
          Title="Invite Your Friend"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
                fill="#F7F7FC"
              />
            </Svg>
          }
        />
        <Button
          lastIcon={false}
          Title="Logout"
          Icon={
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12 2V6"
                stroke="#F7F7FC"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <Path
                d="M8.5 3.70605C5.26806 5.07157 3 8.27099 3 12.0001C3 14.3052 3.86656 16.4079 5.29169 18.0002M15.5 3.70605C18.7319 5.07157 21 8.27099 21 12.0001C21 16.9707 16.9706 21.0001 12 21.0001C10.9481 21.0001 9.93834 20.8197 9 20.488"
                stroke="#F7F7FC"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            </Svg>
          }
        />
      </View>
    </PageWrapper>
  );
};

export default More;
