import clsx from "clsx";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  label: string;
  handlePress?: () => void;
  otherStyles?: string;
}

const Button = ({ label, handlePress, otherStyles }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-primary border-primary border p-4 rounded-full w-full"
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Text className="text-center font-bold text-white">{label}</Text>
    </TouchableOpacity>
  );
};

export const OutlineButton = ({
  label,
  handlePress,
  otherStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={clsx(
        "border-primary border p-4 rounded-full w-full",
        otherStyles
      )}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <Text className="text-center font-bold text-primary">{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
