import icons from "@constants/icons";
import { View, Text, Pressable, Image } from "react-native";

const GenderOption = ({ gender, selectedGender, setSelectedGender }) => {
  return (
    <Pressable
      className="w-full mb-3"
      onPress={() => setSelectedGender(gender)}
    >
      <View
        className={`justify-center items-center flex-row space-x-2 rounded-lg py-3 border-2 ${
          selectedGender === gender ? "border-primary" : "border-gray-200"
        }`}
      >
        {/* <Image source={gender === "Male" ? icons.male : icons.female} /> */}
        <Text className="text-center">{gender}</Text>
      </View>
    </Pressable>
  );
};

export default GenderOption;
