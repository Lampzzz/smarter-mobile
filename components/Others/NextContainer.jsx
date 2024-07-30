import { View } from "react-native";
import React from "react";
import AuthInfo from "@components/Text/AuthInfo";
import PrimaryButton from "@components/Button/PrimaryButton";
import { router } from "expo-router";

const NextContainer = ({ label = "Next", path }) => {
  return (
    <View className="w-full space-y-3 shadow-sm px-3 pt-5">
      <AuthInfo />
      <PrimaryButton
        label={label}
        handleClick={() => router.push(`/${path}`)}
      />
    </View>
  );
};

export default NextContainer;
