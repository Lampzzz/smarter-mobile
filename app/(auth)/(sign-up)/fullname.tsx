import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { View } from "react-native";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";

interface FormValues {
  firstName: string;
  middleName?: string;
  lastName: string;
}

const FullName = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "", middleName: "", lastName: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);

    if (!data) return;

    router.push("/birthdate");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="What's Your Full Name?"
            subtitle="Please provide your full name to personalize your experience"
          />
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: "First name is required",
            }}
            render={({ field: { onChange, value } }) => (
              <FormField
                label="First Name"
                placeholder="Enter your first name"
                value={value}
                onChangeText={onChange}
                error={errors.firstName?.message}
                otherStyles="mb-3"
              />
            )}
          />

          <Controller
            control={control}
            name="middleName"
            render={({ field: { onChange, value } }) => (
              <FormField
                label="Middle Name (Optional)"
                placeholder="Enter your middle name"
                value={value}
                onChangeText={onChange}
                error={errors.middleName?.message}
                otherStyles="mb-3"
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            rules={{
              required: "Last name is required",
            }}
            render={({ field: { onChange, value } }) => (
              <FormField
                label="Last Name"
                placeholder="Enter your last name"
                value={value}
                onChangeText={onChange}
                error={errors.lastName?.message}
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

export default FullName;
