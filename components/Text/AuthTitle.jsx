import { View, Text } from "react-native";

const AuthTitle = ({ maintitle, subtitle }) => {
  return (
    <View className="mb-10">
      <Text className="text-3xl font-abold mb-2">{maintitle}</Text>
      <Text className="font-aregular text-gray-600 text-lg">{subtitle}</Text>
    </View>
  );
};

export default AuthTitle;
