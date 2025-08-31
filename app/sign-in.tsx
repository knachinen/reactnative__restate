import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      console.log("Login Success");
    }
  };

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

          <Text className="text-lg text-center font-rubik text-black-200 mt-12">
            Sign in to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
