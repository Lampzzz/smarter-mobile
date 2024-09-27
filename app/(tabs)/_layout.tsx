import { Stack } from "expo-router";

const TabsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default TabsLayout;
