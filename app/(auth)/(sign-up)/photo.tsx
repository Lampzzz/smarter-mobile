import { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import Button from "@/components/ui/Button";
import { icons } from "@/constant";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import { router } from "expo-router";

const Photo = () => {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button handlePress={requestPermission} label="grant permission" />
      </View>
    );
  }

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="Take Your Photo"
            subtitle="Please capture a clear picture of yourself for your profile"
          />
          <View className="overflow-hidden w-[300px] h-[300px] rounded-full mx-auto">
            <CameraView facing="front" className="flex-1" />
          </View>
        </View>
        <View className="items-center">
          <TermsAndPrivacy />
          <Button label="Next" handlePress={() => router.push("/success")} />
        </View>
      </View>
    </Container>
  );
};

export default Photo;
