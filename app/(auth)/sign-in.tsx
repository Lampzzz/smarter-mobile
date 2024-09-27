import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Checkbox } from "react-native-paper";

import Container from "@/components/ui/Container";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { login } from "@/firebase/auth";
import { useAuthStore } from "@/store/authStore";

const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const { isAuthenticated } = useAuthStore();

  console.log(isAuthenticated);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { contactInfo: "sao@gmail.com", password: "James17!" },
  });

  const onSubmit = async (data: { contactInfo: string; password: string }) => {
    if (!data) return;

    await login(data.contactInfo, data.password);

    router.push("/home");
  };

  return (
    <Container>
      <View className="flex-1 justify-center">
        <ContentHeader
          title="Sign In"
          subtitle="Please enter your details to sign in"
        />

        <Controller
          control={control}
          name="contactInfo"
          rules={{
            required: "Email or Contact Number is required",
          }}
          render={({ field: { onChange, value } }) => (
            <FormField
              label="Email or Contact Number"
              placeholder="Enter your active email or contact number"
              value={value}
              onChangeText={onChange}
              error={errors.contactInfo?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
          }}
          render={({ field: { onChange, value } }) => (
            <FormField
              label="Password"
              placeholder="Enter your password"
              value={value}
              onChangeText={onChange}
              error={errors.password?.message}
              otherStyles="mb-4"
            />
          )}
        />

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
          <Button label="Sign In" handlePress={handleSubmit(onSubmit)} />
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
