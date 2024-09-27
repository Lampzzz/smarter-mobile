import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { router } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";
import clsx from "clsx";

const Gender = () => {
  const [gender, setGender] = useState("");
  const options = ["Man", "Woman", "Other"];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { gender: "Man" } });

  const onSubmit = (data: { gender: string }) => {
    console.log(data);

    if (!data) return;

    router.push("/photo");
  };

  return (
    <Container>
      <View className="flex-1 justify-between">
        <View className="flex-1 justify-start">
          <HeaderBack />
          <ContentHeader
            title="Select Your Gender"
            subtitle="Choose your gender to receive tailored resources and information"
          />

          <Text className="font-semibold text-base mb-2">Gender</Text>

          <Controller
            control={control}
            name="gender"
            rules={{ required: "Please select a gender" }}
            render={({ field: { onChange, value } }) => (
              <>
                {options.map((option) => (
                  <Option
                    key={option}
                    label={option}
                    handlePress={() => onChange(option)}
                    isSelected={value === option}
                  />
                ))}
              </>
            )}
          />
          {errors.gender && (
            <Text className="text-red-500">{errors.gender.message}</Text>
          )}
        </View>
        <View className="items-center">
          <TermsAndPrivacy />
          <Button label="Next" handlePress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </Container>
  );
};

interface OptionProps {
  label: string;
  handlePress?: () => void;
  isSelected: boolean;
}

const Option = ({ label, handlePress, isSelected }: OptionProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={1}
      className={clsx(
        "rounded-lg mb-3 w-full p-0.5 bg-white",
        isSelected && "bg-primary"
      )}
    >
      <View className="p-3 bg-white rounded-lg">
        <Text
          className={clsx(
            "text-center",
            isSelected ? "text-primary font-semibold" : "text-gray"
          )}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Gender;
