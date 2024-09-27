import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { View } from "react-native";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";
import { useUserFormStore } from "@/store/userStore";

const ContactInfo = () => {
  const { setUser } = useUserFormStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { contactInfo: "lampazaj@gmail.com" } });

  const onSubmit = (data: { contactInfo: string }) => {
    if (!data) return;
    setUser({ contactInfo: data.contactInfo });

    router.push("/verification-code");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="Let's start with your contact information"
            subtitle="Share your email or phone number to receive timely updates and resources"
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
        </View>

        <View className="items-center">
          <TermsAndPrivacy />
          <Button label="Next" handlePress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </Container>
  );
};

export default ContactInfo;
