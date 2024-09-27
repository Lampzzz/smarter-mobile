import { View, Text } from "react-native";

interface ContentHeaderProps {
  title: string;
  subtitle: string;
}

const ContentHeader = ({ title, subtitle }: ContentHeaderProps) => {
  return (
    <View className="py-7">
      <Text className="text-2xl font-bold">{title}</Text>
      <Text className="text-sm text-gray">{subtitle}</Text>
    </View>
  );
};

export default ContentHeader;
