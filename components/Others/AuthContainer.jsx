import { SafeAreaView } from "react-native-safe-area-context";

const AuthContainer = ({ children }) => {
  return (
    <SafeAreaView className="justify-between items-center py-5 h-full bg-white">
      {children}
    </SafeAreaView>
  );
};

export default AuthContainer;
