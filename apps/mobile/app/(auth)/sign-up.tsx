import { View, Text, Image } from "react-native";
import React from "react";
import Container from "@/components/ui/Container";
import { icons } from "@/constant";

const SignUp = () => {
  return (
    <Container>
      <View>
        <Image
          source={icons.arrowLeft}
          resizeMode="contain"
          className="w-5 h-5"
        />
      </View>
    </Container>
  );
};

export default SignUp;
