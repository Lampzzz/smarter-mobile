import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ animation: "none" }}>
        <Stack.Screen
          name="nameform"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="genderform"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="birthform"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="weightform"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="activityform"
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
