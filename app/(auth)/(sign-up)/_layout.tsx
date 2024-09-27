import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="contact-info" />
      <Stack.Screen name="verification-code" />
      <Stack.Screen name="password" />
      <Stack.Screen name="fullname" />
      <Stack.Screen name="birthdate" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="address" />
      <Stack.Screen name="photo" />
    </Stack>
  );
};

export default SignUpLayout;
