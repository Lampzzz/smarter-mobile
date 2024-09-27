import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { View } from "react-native";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Container from "@/components/ui/Container";
import HeaderBack from "@/components/ui/HeaderBack";
import ContentHeader from "@/components/ui/ContentHeader";
import FormField from "@/components/ui/FormField";
import TermsAndPrivacy from "@/components/ui/TermsAndPrivacy";
import Button from "@/components/ui/Button";
import { useUserFormStore } from "@/store/userStore";
import { useState } from "react";
import { formatDate } from "@/lib/utils";

const Birthdate = () => {
  const { setUser } = useUserFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { birthdate: "" } });

  const onSubmit = (data: { birthdate: string }) => {
    if (!data) return;
    setUser({ birthdate: data.birthdate });

    router.push("/address");
  };

  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };

  const handleChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined,
    onChange?: (value: string) => void
  ) => {
    setShow(false);
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate);
      setDate(selectedDate);
      if (onChange) onChange(formattedDate);
    }
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
              <>
                <FormField
                  label="Birthdate"
                  placeholder="mm/dd/yyyy"
                  value={value}
                  error={errors.birthdate?.message}
                  onPressIcon={showDatepicker}
                />

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    onChange={(event, selectedDate) =>
                      handleChange(event, selectedDate, onChange)
                    }
                  />
                )}
              </>
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
