import { useState } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Checkbox } from "react-native-paper";

import Container from "@/components/ui/Container";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

const SignIn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <View className="flex-1 justify-center">
        <ContentHeader
          title="Sign In"
          subtitle="Please enter your details to sign in"
        />

        <FormField
          label="Email or Contact Number"
          placeholder="Enter your email or contact number"
          otherStyles="mb-4"
        />

        <FormField label="Password" placeholder="Enter your password" />

        <View className="w-full flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <Text className="text-gray text-xs">Stay Sign In</Text>
            <View style={{ transform: [{ scale: 0.8 }] }}>
              <Checkbox
                color="#F58509"
                uncheckedColor="#F58509"
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
          </View>
          <Text className="text-gray text-xs">Forgot Password?</Text>
        </View>

        <View className="mt-10 space-y-3 items-center">
          <Button
            label="Sign In"
            handlePress={() => router.push("/contact-info")}
          />
          <Text className="text-gray text-center">
            Don't have an account?{" "}
            <Text
              className="text-primary font-bold"
              onPress={() => router.push("/contact-info")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default SignIn;
