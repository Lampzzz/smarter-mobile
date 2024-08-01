import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ animation: "none" }}>
        <Stack.Screen
          name="nickname"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="gender"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="birthdate"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="weight"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="activitylevel"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};

export default AuthLayout;
