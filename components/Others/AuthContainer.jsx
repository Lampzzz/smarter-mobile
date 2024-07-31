import { SafeAreaView } from "react-native-safe-area-context";

const AuthContainer = ({ children }) => {
  return (
    <SafeAreaView className="justify-between h-full bg-white">
      {children}
    </SafeAreaView>
  );
};

export default AuthContainer;
