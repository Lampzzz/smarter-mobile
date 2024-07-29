import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import PrimaryButton from "../components/PrimaryButton";
import OutlinedButton from "../components/OutlinedButton";

const index = () => {
  return (
    <SafeAreaView className="h-full justify-center items-center p-6">
      <View>
        <Text className="font-abold text-2xl text-gray-800 mb-2 text-center">
          Assist with Aquassist
        </Text>
        <Text className="text-base font-aregular text-gray-600 text-center">
          Hey there! Ready to stay hydrated? Meet your new water intake tracker
          - keeping healthy has never been this fun!
        </Text>
      </View>

      <View className="w-full space-y-3 shadow-sm">
        <PrimaryButton label="Get started for free" otherstyles="mb-3" />
        <OutlinedButton label="I have an account" />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default index;
