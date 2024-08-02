import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { icons } from "@/constants/index";

const TextField = ({ otherStyles, label }) => {
  const [focus, setFocus] = useState(false);
  const [nickname, setNickname] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-sm text-gray-800 font-amedium">{label}</Text>
      <View
        className={`w-full h-12 border items-center flex-row rounded-lg p-3 ${
          focus ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <TextInput
          className="flex-1 text-gray-800 font-psemibold text-sm"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={nickname}
          onChangeText={(e) => setNickname(e)}
          secureTextEntry={
            label === "Password" &&
            label === "Confirm Password" &&
            !showPassword
          }
        />
        {nickname.length > 0 && (
          <Pressable onPress={() => setNickname("")}>
            <Image source={icons.cross} className="h-5 w-5" />
          </Pressable>
        )}
        {label === "Password" && label === "Confirm Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eyeshow : icons.eyehide}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextField;
