import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import images from "@/constants/images";

const userinfo = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/nickname");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView className="h-full justify-between items-center bg-white">
      <View className="flex-1 px-6 justify-center">
        <View className="mx-auto mb-6">
          <Image source={images.blueLogo} />
        </View>
        <Text className="text-3xl font-abold text-gray-700 text-center">
          Aquasist helps you to setup your personal information
        </Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default userinfo;
