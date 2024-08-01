import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";

import { fonts } from "@/constants";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "AlbertSans-Black": fonts.black,
    "AlbertSans-Bold": fonts.bold,
    "AlbertSans-ExtraBold": fonts.extraBold,
    "AlbertSans-ExtraLight": fonts.extraLight,
    "AlbertSans-Italic": fonts.italic,
    "AlbertSans-Light": fonts.light,
    "AlbertSans-Regular": fonts.regular,
    "AlbertSans-SemiBold": fonts.semiBold,
    "AlbertSans-Medium": fonts.medium,
    "AlbertSans-Thin": fonts.thin,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          animation: "none",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
