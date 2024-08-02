import { Text } from "react-native";

const Agreements = () => {
  return (
    <Text className="text-xs font-aregular text-gray-800 text-center mb-3 px-7">
      By creating an account, you agree to our {""}
      <Text className="text-primary underline">Provicy Policy</Text>, and {""}
      <Text className="text-primary underline">Terms of Services</Text>
    </Text>
  );
};

export default Agreements;
