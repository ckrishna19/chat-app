import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const Button = ({
  Icon,
  Title,
  lastIcon = true,
  onPress1,
  onPress2,
  longPress1,
  longPress2,
}) => {
  return (
    <View className="flex-row items-center justify-center py-2">
      <TouchableOpacity
        onPress={onPress1}
        onLongPress={longPress1}
        className="flex-1"
      >
        <View className="flex-row items-center gap-x-2">
          {Icon}
          <Text className="text-[#F7F7FC] font-semibold text-[14px] leading-6">
            {Title}
          </Text>
        </View>
      </TouchableOpacity>
      {lastIcon && (
        <TouchableOpacity onPress={onPress2} onLongPress={longPress2}>
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
      )}
    </View>
  );
};

export default Button;
