import { View, Pressable, Image } from "react-native";
import ProgressAuth from "@components/Others/ProgressAuth";
import { router } from "expo-router";

const ProgressContainer = ({ highlightCount }) => {
  return (
    <View className="flex-row items-center justify-between space-x-5 mb-6 px-6">
      <Pressable onPress={() => router.back()}>
        <Image source={require("assets/images/Back.png")} />
      </Pressable>
      <View className="space-x-1 flex-row">
        <ProgressAuth highlightCount={highlightCount} />
      </View>
    </View>
  );
};

export default ProgressContainer;
