import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

import AuthTitle from "@/components/text/AuthTitle";
import ProgressContainer from "@/components/others/ProgressContainer";
import AuthContainer from "@/components/others/AuthContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";
import OutlinedButton from "@/components/button/OutlinedButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import Agreements from "@/components/text/Agreements";

const Choose = () => {
  return (
    <AuthContainer>
      <ProgressContainer />
      <AuthTitleContainer>
        <AuthTitle maintitle="Choose an account you want to sign up with" />
      </AuthTitleContainer>

      <Agreements />

      <View className="w-full rounded-t-3xl bg-white" style={styles.boxShadow}>
        <View className="space-y-3 p-6">
          <PrimaryButton
            label="Create"
            otherstyles="mb-3"
            handleClick={() => router.push("/email")}
          />
          <OutlinedButton label="Continue with Google" />
        </View>
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 10,
  },
});

export default Choose;
