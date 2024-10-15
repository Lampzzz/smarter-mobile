import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { View } from "react-native";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";

const VerificationCode = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { verificationCode: "123456" } });

  const onSubmit = (data: { verificationCode: string }) => {
    if (!data) return;

    router.push("/password");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="Enter Your Verification Code"
            subtitle="We've sent a code to your email/phone. Please enter it below to verify your account"
          />
          <Controller
            control={control}
            name="verificationCode"
            rules={{
              required: "Verification code is required",
            }}
            render={({ field: { onChange, value } }) => (
              <FormField
                label="One-Time Passcode"
                placeholder="Enter your 6-digit code"
                value={value}
                onChangeText={onChange}
                error={errors.verificationCode?.message}
              />
            )}
          />
        </View>

        <View className="items-center">
          <Button label="Next" handlePress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </Container>
  );
};

export default VerificationCode;
