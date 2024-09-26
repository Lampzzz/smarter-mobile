import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps {
  otherStyles?: string;
  children: React.ReactNode;
}

const Container = ({ otherStyles, children }: ContainerProps) => {
  return (
    <SafeAreaView className={clsx("bg-white h-full p-4", otherStyles)}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
