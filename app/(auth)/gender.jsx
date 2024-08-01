import { View } from "react-native";
import { useState } from "react";

import AuthContainer from "@/components/others/AuthContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";
import ProgressContainer from "@/components/others/ProgressContainer";
import AuthTitle from "@/components/text/AuthTitle";
import GenderOption from "@/components/form/GenderOption";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const genderList = ["Male", "Female", "Prefer not to say"];

  return (
    <AuthContainer>
      <ProgressContainer highlightCount={2} />
      <AuthTitleContainer className="px-3 flex-1">
        <AuthTitle
          maintitle="What sex should we use to calculate your recommendations?"
          subtitle="Based on the body type we will better calculate your hydration needs."
        />

        <View className="justify-between items-center">
          {genderList.map((gender) => (
            <GenderOption
              key={gender}
              gender={gender}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          ))}
        </View>
      </AuthTitleContainer>

      <NextContainer path="birthdate" />
    </AuthContainer>
  );
};

export default Gender;
