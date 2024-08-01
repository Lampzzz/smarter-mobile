import { View, Text, Image } from "react-native";

const ActivityOption = ({ icons, title, description }) => {
  return (
    <View className="p-4 border border-gray-200 rounded-lg mb-3">
      <View className="flex-row space-x-3 items-center mb-2">
        <Image source={icons} className="h-8 w-8" />
        <Text className="text-lg font-asemibold">{title}</Text>
      </View>
      <Text className="text-base font-aregular">{description}</Text>
    </View>
  );
};

export default ActivityOption;
