import { View, Pressable, Image } from "react-native";
import { router } from "expo-router";

import ProgressAuth from "@/components/others/ProgressAuth";
import { icons } from "@/constants";

const ProgressContainer = ({ highlightCount }) => {
  return (
    <View className="flex-row items-center justify-between my-6 px-3">
      <Pressable onPress={() => router.back()}>
        <Image source={icons.prev} />
      </Pressable>
      <View className="space-x-1 flex-row">
        <ProgressAuth highlightCount={highlightCount} />
      </View>
    </View>
  );
};

export default ProgressContainer;
