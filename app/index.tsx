import Loading from "@/components/ui/Loading";
import { useAuthStore } from "@/store/authStore";
import { Redirect } from "expo-router";
import { useEffect } from "react";

const Page = () => {
  const { isLoading, isAuthenticated, initializeAuthListener } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, []);

  if (!isLoading && isAuthenticated) return <Redirect href="/home" />;
  if (isLoading) return <Loading />;

  return <Redirect href="/(auth)/onboarding" />;
};

export default Page;
