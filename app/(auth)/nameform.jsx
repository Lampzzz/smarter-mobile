import { View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import AuthTitle from "../../components/Text/AuthTitle";
import AuthInfo from "../../components/Text/AuthInfo";

const NameForm = () => {
  return (
    <SafeAreaView className="justify-between items-center h-full bg-white">
      <View className="px-3 flex-1">
        <AuthTitle
          maintitle="What shall we call you?"
          subtitle="Only used in your profile and notifications."
        />
        <InputField label="Nickname" />
      </View>

      <View className="w-full space-y-3 shadow-sm border border-white-blue p-6">
        <AuthInfo />
        <PrimaryButton
          label="Next"
          otherstyles="mb-3"
          handleClick={() => router.push("/genderform")}
        />
      </View>
    </SafeAreaView>
  );
};

export default NameForm;
