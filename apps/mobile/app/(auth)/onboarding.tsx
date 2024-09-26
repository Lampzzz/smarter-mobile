import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { images } from "@/constant";

const onboarding = () => {
  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-32 h-32 mx-auto mb-5"
          />
          <Text className="text-2xl font-bold text-center">
            Welcome to <Text className="text-primary">SmarTer</Text>
          </Text>
          <Text className="text-gray text-base text-center">
            A smart shelter with reliable power, environmental monitoring, and
            secure connectivity in emergencies
          </Text>
        </View>
        <View className="gap-y-3 items-center">
          <Button
            label="Get Started"
            handlePress={() => router.push("/sign-up")}
          />
          <Text className="text-gray text-center">
            Already have an account?{" "}
            <Text className="text-primary font-bold">Log In</Text>
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default onboarding;
