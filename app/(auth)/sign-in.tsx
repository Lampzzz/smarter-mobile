import { useForm, Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { router } from "expo-router";

import Container from "@/components/ui/Container";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { login } from "@/firebase/auth";

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { contactInfo: "", password: "" },
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
              label="Email"
              placeholder="Enter your email"
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
        <View className="w-full flex-row items-center justify-end">
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
