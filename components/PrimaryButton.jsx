import { Text, Pressable } from "react-native";

const PrimaryButton = ({ label, otherstyles }) => {
  return (
    <Pressable className={`bg-primary py-3 w-full rounded-full ${otherstyles}`}>
      <Text className="font-amedium text-base text-center text-white-blue">
        {label}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
