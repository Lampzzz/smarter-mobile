import { View, Text } from "react-native";

const TermsAndPrivacy = () => {
  return (
    <View className="mb-3">
      <Text className="text-center text-sm">
        By creating an account, you agree to our{" "}
        <Text className="text-primary">Privacy Policy</Text> and{" "}
        <Text className="text-primary">Terms of Services</Text>
      </Text>
    </View>
  );
};

export default TermsAndPrivacy;
