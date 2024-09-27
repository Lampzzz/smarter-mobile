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

const Address = () => {
  const { setUser } = useUserFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { address: "Caloocan City" } });

  const onSubmit = (data: { address: string }) => {
    if (!data) return;
    setUser({ address: data.address });

    router.push("/gender");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="Where Do You Live?"
            subtitle="Let us know your address to help us serve you better"
          />
          <Controller
            control={control}
            name="address"
            rules={{
              required: "Address is required",
            }}
            render={({ field: { onChange, value } }) => (
              <FormField
                label="Address"
                placeholder="Enter your complete address"
                value={value}
                onChangeText={onChange}
                error={errors.address?.message}
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

export default Address;
