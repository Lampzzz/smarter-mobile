import { ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Loading = () => {
  return (
    <SafeAreaView className="bg-white h-full items-center justify-center">
      <ActivityIndicator size="large" color="#F58509" />
    </SafeAreaView>
  );
};

export default Loading;
