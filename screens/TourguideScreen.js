import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const TourguideScreen = () => {
  const navigation = useNavigation();

useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: true,
    title: "",
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
    },
    headerStyle: {
      backgroundColor: "#003580",
      height: 110,
      borderBottomColor: "transparent",
      shadowColor: "transparent"
    }
  });
}, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-4 items-center space-x-2">
        <View className="w-16 h-16 bg-[#FFC72C] rounded-full items-center justify-center border-l-2 border-r-2 border-t-4 border-[#003580] rounded-full items-center justify-center">
          <Text className="text-white text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#003580] text-3xl font-semibold">
          Tour guide
        </Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-2 space-y-3">
        <Text className="text-[#3C6072] text-[24px]">Enjoy the trip with</Text>
        <Text className="text-[#003580] text-[24px] font-bold">
          TouristOpedia
        </Text>

        <Text className="text-[#3C6072] text-base">
          Lets tour the world with us and{"\n"}
          find your restaurant and{"\n"}
          Hotels at your Destination...
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#003580] rounded-full absolute bottom-36 -right-60"></View>
      <View className="w-[400px] h-[400px] bg-[#FFC72C] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-30"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#FFC72C] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#003580]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TourguideScreen;
