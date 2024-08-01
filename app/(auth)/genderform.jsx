import { View } from "react-native";
import { useState } from "react";
import AuthContainer from "@components/Others/AuthContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";
import ProgressContainer from "@components/Others/ProgressContainer";
import AuthTitle from "@components/Text/AuthTitle";
import GenderOption from "@components/Form/GenderOption";

const GenderForm = () => {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <AuthContainer>
      <ProgressContainer highlightCount={2} />
      <AuthTitleContainer className="px-3 flex-1">
        <AuthTitle
          maintitle="What sex should we use to calculate your recommendations?"
          subtitle="Based on the body type we will better calculate your hydration needs."
        />

        <View className="justify-between items-center">
          {["Male", "Female", "Prefer not to say"].map((gender) => (
            <GenderOption
              key={gender}
              gender={gender}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          ))}
        </View>
      </AuthTitleContainer>

      <NextContainer path="birthform" />
    </AuthContainer>
  );
};

export default GenderForm;
