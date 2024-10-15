import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import { Text, View, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import Loading from "@/components/ui/Loading";
import { useUserFormStore } from "@/store/userStore";
import Button, { OutlineButton } from "@/components/ui/Button";

const Photo = () => {
  const { setUser, user, loading, addUser } = useUserFormStore();
  const [permission, requestPermission] = useCameraPermissions();
  const [isChangingPhoto, setIsChangingPhoto] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button handlePress={requestPermission} label="grant permission" />
      </View>
    );
  }

  const openGallery = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    });

    if (result.assets && result.assets.length > 0) {
      setUser({ photo: result.assets[0].uri });
      setIsChangingPhoto(false);
    } else {
      console.error("No assets found");
      setUser({ photo: "" });
    }
  };

  const onSubmit = async () => {
    // await addUser();
    router.push("/success");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="Take Your Photo"
            subtitle="Please capture a clear picture of yourself for the confirmation of your account"
          />
          <View className="overflow-hidden w-[300px] h-[300px] rounded-full mx-auto">
            {user.photo ? (
              <Image source={{ uri: user.photo }} className="flex-1" />
            ) : (
              <CameraView facing="front" className="flex-1" />
            )}
          </View>
        </View>
        {user.photo && !isChangingPhoto ? (
          <View className="items-center">
            <Button label="Done" handlePress={onSubmit} />
            <OutlineButton
              label="Change Photo"
              otherStyles="mt-3"
              handlePress={() => setIsChangingPhoto(true)}
            />
          </View>
        ) : (
          <View className="items-center">
            <Button
              label="Take a Photo"
              handlePress={() => router.push("/success")}
            />
            <OutlineButton
              label="Gallery"
              otherStyles="mt-3"
              handlePress={openGallery}
            />
          </View>
        )}
      </View>
    </Container>
  );
};

export default Photo;
