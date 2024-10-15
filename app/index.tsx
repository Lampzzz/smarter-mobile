import { useEffect } from "react";
import { Redirect } from "expo-router";

import Loading from "@/components/ui/Loading";
import { useAuthStore } from "@/store/authStore";

const Page = () => {
  const { isLoading, isAuthenticated, initializeAuthListener } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, []);

  if (isLoading) return <Loading />;
  if (!isLoading && isAuthenticated) return <Redirect href="/home" />;

  return <Redirect href="/(auth)/onboarding" />;
};

export default Page;
