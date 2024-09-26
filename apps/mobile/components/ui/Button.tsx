import { View, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  label: string;
  handlePress: () => void;
}

const Button = ({ label, handlePress }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-primary p-4 rounded-full w-full"
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Text className="text-center font-bold text-white">{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
