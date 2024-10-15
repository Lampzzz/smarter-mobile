import Container from "@/components/ui/Container";
import { logout } from "@/firebase/auth";
import { useAuthStore } from "@/store/authStore";
import { View, Text, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
