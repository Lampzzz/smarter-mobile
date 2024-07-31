import { StyleSheet, View } from "react-native";
import React from "react";
import AuthInfo from "@components/Text/AuthInfo";
import PrimaryButton from "@components/Button/PrimaryButton";
import { router } from "expo-router";

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
