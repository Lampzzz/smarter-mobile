import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";
import { useUserFormStore } from "@/store/userStore";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const Password = () => {
  const { setUser } = useUserFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: { password: "James17!", confirmPassword: "James17!" },
  });

  const onSubmit = (data: FormValues) => {
    if (!data) return;
    setUser({ password: data.password });

    router.push("/fullname");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="flex-1 justify-start">
            <HeaderBack />
            <ContentHeader
              title="Create a Secure Password"
              subtitle="Use at least 8 characters, with at least one uppercase and lowerase letter, numbers, and special characters"
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
                  message: "Invalid Password Format",
                },
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
            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              }}
              render={({ field: { onChange, value } }) => (
                <FormField
                  label="Confirm Password"
                  placeholder="Enter your confirm password"
                  value={value}
                  onChangeText={onChange}
                  error={errors.confirmPassword?.message}
                />
              )}
            />
          </View>
        </ScrollView>

        <View className="items-center">
          <TermsAndPrivacy />
          <Button label="Next" handlePress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </Container>
  );
};

export default Password;
