import images from "@/constants/images";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1">
        <ScrollView contentContainerClassName="flex-grow">
          <Image
            source={images.onboarding}
            className="w-full h-4/6"
            resizeMode="contain"
          />
        </ScrollView>
        <View className="px-10 my-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>
          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">
            Let{"'"}s Get You Cloer to {"\n"}
            <Text className="text-primary-300">Your Dream Home</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
