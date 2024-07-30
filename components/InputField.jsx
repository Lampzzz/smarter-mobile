import { useState } from "react";
import { View, Text, TextInput } from "react-native";

const InputField = ({ otherStyles, label }) => {
  const [focus, setFocus] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-sm text-gray-800 font-amedium">{label}</Text>
      <View
        className={`w-full h-13 border items-center flex-row rounded-lg p-3 ${
          focus ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <TextInput
          className="flex-1 text-gray-800 font-psemibold text-sm"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
    </View>
  );
};

export default InputField;
