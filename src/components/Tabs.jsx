import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Tabs = ({ state, descriptors, navigation }) => {
  return (
    <View className="bg-[#152033] h-16 justify-center">
      <View className="flex-row justify-around items-center">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
            >
              {isFocused && route.name === "People" && (
                <Svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M12 4C8.31806 4 5.33329 6.98477 5.33329 10.6667C5.33329 14.3486 8.31806 17.3333 12 17.3333C15.6819 17.3333 18.6666 14.3486 18.6666 10.6667C18.6666 6.98477 15.6819 4 12 4ZM7.99996 10.6667C7.99996 8.45753 9.79082 6.66667 12 6.66667C14.2091 6.66667 16 8.45753 16 10.6667C16 12.8758 14.2091 14.6667 12 14.6667C9.79082 14.6667 7.99996 12.8758 7.99996 10.6667Z"
                    fill="#F7F7FC"
                  />
                  <Path
                    d="M22.5445 10.9577C22.1694 10.7665 21.7543 10.6667 21.3333 10.6667V8.00008C22.1754 8.00008 23.0056 8.19942 23.7558 8.58193C23.8385 8.62406 23.9199 8.66828 24 8.71453C24.6472 9.08818 25.2095 9.59425 25.6497 10.2007C26.1443 10.8823 26.4705 11.6713 26.6016 12.5032C26.7327 13.335 26.6649 14.1861 26.4039 14.9867C26.1428 15.7874 25.6958 16.5148 25.0996 17.1095C24.5033 17.7042 23.7747 18.1492 22.9734 18.4082C22.2603 18.6387 21.5077 18.7159 20.7647 18.6363C20.6727 18.6264 20.5809 18.6141 20.4893 18.5995C19.6584 18.4663 18.8707 18.1384 18.1908 17.6425L18.1894 17.6415L19.7613 15.4874C20.1015 15.7356 20.4956 15.8997 20.9113 15.9663C21.3271 16.033 21.7527 16.0002 22.1533 15.8707C22.554 15.7412 22.9183 15.5187 23.2164 15.2214C23.5145 14.924 23.738 14.5603 23.8685 14.16C23.999 13.7597 24.0329 13.3342 23.9674 12.9183C23.9018 12.5023 23.7387 12.1079 23.4914 11.7671C23.2441 11.4263 22.9196 11.149 22.5445 10.9577Z"
                    fill="#F7F7FC"
                  />
                  <Path
                    d="M26.6641 28C26.6641 27.2999 26.5262 26.6068 26.2583 25.96C25.9904 25.3132 25.5978 24.7256 25.1027 24.2306C24.6077 23.7355 24.0201 23.3429 23.3733 23.075C22.7265 22.8071 22.0333 22.6692 21.3333 22.6692V20C22.2427 20 23.1445 20.1551 24 20.4575C24.1327 20.5045 24.2644 20.555 24.3948 20.609C25.3654 21.011 26.2473 21.6003 26.9901 22.3431C27.733 23.086 28.3223 23.9679 28.7243 24.9385C28.7783 25.0689 28.8288 25.2006 28.8758 25.3333C29.1782 26.1888 29.3333 27.0906 29.3333 28H26.6641Z"
                    fill="#F7F7FC"
                  />
                  <Path
                    d="M21.3333 28H18.6666C18.6666 24.3181 15.6819 21.3333 12 21.3333C8.31806 21.3333 5.33329 24.3181 5.33329 28H2.66663C2.66663 22.8453 6.8453 18.6667 12 18.6667C17.1546 18.6667 21.3333 22.8453 21.3333 28Z"
                    fill="#F7F7FC"
                  />
                </Svg>
              )}

              {isFocused && route.name === "Chat" && (
                <Svg
                  width={33}
                  height={32}
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M11.2351 23.7713L12.1065 24.2371C13.4568 24.959 14.9648 25.3356 16.496 25.3333L16.5 25.3333C21.6548 25.3333 25.8333 21.1548 25.8333 16C25.8333 10.8452 21.6548 6.66667 16.5 6.66667C11.3452 6.66667 7.16668 10.8452 7.16668 16V16.004C7.16437 17.5352 7.54097 19.0432 8.26289 20.3935L8.72873 21.2649L8.01244 24.4876L11.2351 23.7713ZM4.50001 28L5.91121 21.6508C4.98185 19.9125 4.49705 17.9712 4.50001 16C4.50001 9.3724 9.87241 4 16.5 4C23.1276 4 28.5 9.3724 28.5 16C28.5 22.6276 23.1276 28 16.5 28C14.5288 28.003 12.5875 27.5181 10.8492 26.5888L4.50001 28Z"
                    fill="#F7F7FC"
                  />
                </Svg>
              )}

              {isFocused && route.name === "More" && (
                <Svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M24 18.6667C22.5273 18.6667 21.3334 17.4728 21.3334 16C21.3334 14.5273 22.5273 13.3333 24 13.3333C25.4728 13.3333 26.6667 14.5273 26.6667 16C26.6667 16.7073 26.3858 17.3855 25.8857 17.8856C25.3856 18.3857 24.7073 18.6667 24 18.6667ZM16 18.6667C14.5273 18.6667 13.3334 17.4728 13.3334 16C13.3334 14.5273 14.5273 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5273 18.6667 16C18.6667 16.7073 18.3858 17.3855 17.8857 17.8856C17.3856 18.3857 16.7073 18.6667 16 18.6667ZM8.00004 18.6667C6.52728 18.6667 5.33337 17.4728 5.33337 16C5.33337 14.5273 6.52728 13.3333 8.00004 13.3333C9.4728 13.3333 10.6667 14.5273 10.6667 16C10.6667 16.7073 10.3858 17.3855 9.88566 17.8856C9.38556 18.3857 8.70728 18.6667 8.00004 18.6667Z"
                    fill="#F7F7FC"
                  />
                </Svg>
              )}
              {!isFocused && (
                <Text className="text-[#ADB5BD]">{route.name}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Tabs;
