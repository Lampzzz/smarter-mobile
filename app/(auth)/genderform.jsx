import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import AuthContainer from "@components/Others/AuthContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";
import ProgressContainer from "@components/Others/ProgressContainer";
import AuthTitle from "@components/Text/AuthTitle";

const GenderForm = () => {
  const [gender, setGender] = useState("");

  return (
    <AuthContainer>
      <ProgressContainer highlightCount={2} />
      <AuthTitleContainer className="px-3 flex-1">
        <AuthTitle
          maintitle="What sex should we use to calculate your recommendations?"
          subtitle="Based on the body type we will better calculate your hydration needs."
        />

        <View className="justify-between items-center space-y-3">
          <Pressable className="w-full" onPress={() => setGender("male")}>
            <View
              className={`rounded-lg py-3 border-2 ${
                gender === "male" ? " border-primary" : " border-gray-200"
              }`}
            >
              <Text className="text-center font-asemibold">Male</Text>
            </View>
          </Pressable>
          <Pressable className="w-full" onPress={() => setGender("female")}>
            <View
              className={`rounded-lg py-3 border-2 ${
                gender === "female" ? " border-primary" : "border-gray-200"
              }`}
            >
              <Text className="text-center font-asemibold">Female</Text>
            </View>
          </Pressable>
        </View>
      </AuthTitleContainer>

      <NextContainer path="birthform" />
    </AuthContainer>
  );
};

export default GenderForm;
