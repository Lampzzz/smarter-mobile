import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "AlbertSans-Black": require("../assets/fonts/AlbertSans-Black.ttf"),
    "AlbertSans-Bold": require("../assets/fonts/AlbertSans-Bold.ttf"),
    "AlbertSans-ExtraBold": require("../assets/fonts/AlbertSans-ExtraBold.ttf"),
    "AlbertSans-ExtraLight": require("../assets/fonts/AlbertSans-ExtraLight.ttf"),
    "AlbertSans-Italic": require("../assets/fonts/AlbertSans-Italic.ttf"),
    "AlbertSans-Light": require("../assets/fonts/AlbertSans-Light.ttf"),
    "AlbertSans-Regular": require("../assets/fonts/AlbertSans-Regular.ttf"),
    "AlbertSans-SemiBold": require("../assets/fonts/AlbertSans-SemiBold.ttf"),
    "AlbertSans-Medium": require("../assets/fonts/AlbertSans-Medium.ttf"),
    "AlbertSans-Thin": require("../assets/fonts/AlbertSans-Thin.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
