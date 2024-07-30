import { Text, Pressable } from "react-native";

const OutlinedButton = ({ label }) => {
  return (
    <Pressable className="bg-transparent py-3 w-full border border-gray-600 rounded-full">
      <Text className="font-amedium text-base text-center  text-gray-600">
        {label}
      </Text>
    </Pressable>
  );
};

export default OutlinedButton;
