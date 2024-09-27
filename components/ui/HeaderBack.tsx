import { router } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { icons } from "@/constant";

interface HeaderBackProps {
  label?: string;
}

const HeaderBack = ({ label }: HeaderBackProps) => {
  return (
    <View className="flex flex-row items-center gap-x-4">
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={icons.arrowLeft}
          resizeMode="contain"
          className="w-5 h-5"
        />
      </TouchableOpacity>
      <Text className="text-lg font-bold">{label}</Text>
    </View>
  );
};

export default HeaderBack;
