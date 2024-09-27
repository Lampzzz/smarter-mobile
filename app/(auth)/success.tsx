import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { View, Text } from "react-native";

import Container from "@/components/ui/Container";
import { icons } from "@/constant";
import { router } from "expo-router";

const Success = () => {
  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/(tabs)/home");
    }, 3000);

    return () => clearTimeout(redirect);
  }, []);

  return (
    <Container>
      <View className="flex-1 justify-center items-center">
        <LottieView
          source={icons.sucess}
          autoPlay
          loop={false}
          style={{ height: 150, width: 150 }}
        />
        <Text className="text-3xl font-bold text-center">You're All Set!</Text>
        <Text className="text-sm text-gray text-center">
          Your profile is complete. Explore SmarTer and make the most of your
          experience!
        </Text>
      </View>
    </Container>
  );
};

export default Success;
