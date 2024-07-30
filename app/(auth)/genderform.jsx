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
      </AuthTitleContainer>

      <NextContainer path="birthform" />
    </AuthContainer>
  );
};

export default GenderForm;
