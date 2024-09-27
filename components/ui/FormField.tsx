import clsx from "clsx";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "@/constant";

interface FormFieldProps {
  otherStyles?: string;
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
}

const FormField = ({
  otherStyles,
  label,
  placeholder,
  value,
  onChangeText,
  error,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={clsx("gap-y-1", otherStyles)}>
      <Text className="font-semibold text-base">{label}</Text>
      <View>
        <View
          className={clsx(
            "w-full border-2 rounded-lg flex-row items-center bg-white px-4 h-12",
            error ? "border-red-500" : "border-transparent"
          )}
        >
          <TextInput
            placeholder={placeholder}
            secureTextEntry={label.includes("Password") && !showPassword}
            className="flex-1"
            value={value}
            onChangeText={onChangeText}
          />
          {label.includes("Password") && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeSlash}
                className="w-5 h-5"
                tintColor="#696969"
              />
            </TouchableOpacity>
          )}
          {label === "Birthdate" && (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={icons.calendar}
                className="w-5 h-5"
                tintColor="#696969"
              />
            </TouchableOpacity>
          )}
        </View>
        {error && <Text className="text-red-500 text-sm ms-5">{error}</Text>}
      </View>
    </View>
  );
};

export default FormField;
