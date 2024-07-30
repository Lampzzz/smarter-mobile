import { Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ label, otherstyles, handleClick }) => {
  return (
    <Pressable
      className={`bg-primary py-3 w-full rounded-full ${otherstyles}`}
      onPress={handleClick}
    >
      <Text className="font-amedium text-base text-center text-white-blue">
        {label}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
