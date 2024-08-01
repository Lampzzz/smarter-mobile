import { View, Text, Image, Pressable } from "react-native";

const ActivityOption = ({
  selected,
  setSelected,
  icons,
  title,
  description,
  id,
}) => {
  return (
    <Pressable onPress={() => setSelected(id)}>
      <View
        className={`p-4 border rounded-lg mb-3 ${
          selected == id ? "border-primary" : "border-gray-200"
        }`}
      >
        <View className="flex-row space-x-3 items-center mb-2">
          <Image source={icons} className="h-8 w-8" />
          <Text className="text-lg font-asemibold">{title}</Text>
        </View>
        <Text className="text-base font-aregular">{description}</Text>
      </View>
    </Pressable>
  );
};

export default ActivityOption;
