import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../../components/PrimaryButton";
import AuthTitle from "../../components/Text/AuthTitle";
import AuthInfo from "../../components/Text/AuthInfo";

const GenderForm = () => {
  const [gender, setGender] = useState("");

  return (
    <SafeAreaView className="justify-between items-center h-full bg-white">
      <View className="px-3 flex-1">
        <AuthTitle
          maintitle="What sex should we use to calculate your recommendations?"
          subtitle="Based on the body type we will better calculate your hydration needs."
        />

        <View className="justify-between items-center space-x-3 flex-row">
          <Pressable className="flex-1" onPress={() => setGender("male")}>
            <View
              className={`rounded-lg py-3 ${
                gender === "male"
                  ? "border-2 border-primary"
                  : "border border-gray-200"
              }`}
            >
              <Text className="text-center">Male</Text>
            </View>
          </Pressable>
          <Pressable className="flex-1" onPress={() => setGender("female")}>
            <View
              className={`rounded-lg py-3 ${
                gender === "female"
                  ? "border-2 border-primary"
                  : "border border-gray-200"
              }`}
            >
              <Text className="text-center">Female</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View className="w-full space-y-3 shadow-sm border border-white-blue p-6">
        <AuthInfo />
        <PrimaryButton
          label="Next"
          otherstyles="mb-3"
          handleClick={() => router.push("/nameform")}
        />
      </View>
    </SafeAreaView>
  );
};

export default GenderForm;
