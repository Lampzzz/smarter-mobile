import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

import AuthInfo from "@/components/text/AuthInfo";
import PrimaryButton from "@/components/button/PrimaryButton";

const NextContainer = ({ label = "Next", path }) => {
  return (
    <>
      <AuthInfo />
      <View
        className="px-3 py-5 bg-white rounded-t-3xl"
        style={styles.boxShadow}
      >
        <PrimaryButton
          label={label}
          handleClick={() => router.push(`/${path}`)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 10,
  },
});

export default NextContainer;
