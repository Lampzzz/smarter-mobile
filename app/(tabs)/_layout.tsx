import { useAuthStore } from "@/store/authStore";
import { Redirect, Stack } from "expo-router";

const TabsLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default TabsLayout;
