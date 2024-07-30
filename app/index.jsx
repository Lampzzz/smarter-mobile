import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import PrimaryButton from "@components/Button/PrimaryButton";
import OutlinedButton from "@components/Button/OutlinedButton";

const App = () => {
  return (
    <SafeAreaView className="h-full justify-between items-center">
      <View className="flex-1 px-6 justify-center">
        <View className="mx-auto mb-6">
          <Image source={require("assets/images/blue_logo.png")} />
        </View>
        <Text className="font-abold text-2xl text-gray-800 mb-2 text-center">
          Assist with Aquassist
        </Text>
        <Text className="text-base font-aregular text-gray-600 text-center">
          Hey there! Ready to stay hydrated? Meet your new water intake tracker
          - keeping healthy has never been this fun!
        </Text>
      </View>

      <View className="w-full space-y-3 shadow-sm p-6">
        <PrimaryButton
          label="Get started for free"
          otherstyles="mb-3"
          handleClick={() => router.push("/nameform")}
        />
        <OutlinedButton label="I have an account" />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
