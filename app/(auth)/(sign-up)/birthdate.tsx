import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { View } from "react-native";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";

const Birthdate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { birthdate: "" } });

  const onSubmit = (data: { birthdate: string }) => {
    console.log(data);

    if (!data) return;

    router.push("/address");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="When's Your Birthday?"
            subtitle="Share your birthday to help us tailor your experience"
          />
          <Controller
            control={control}
            name="birthdate"
            rules={{
              required: "Birthdate is required",
            }}
            render={({ field: { onChange, value } }) => (
              <FormField
                label="Birthdate"
                placeholder="mm/dd/yyyy"
                value={value}
                onChangeText={onChange}
                error={errors.birthdate?.message}
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

export default Birthdate;
