import { View } from "react-native";

const HighlightedBoxes = ({ highlightCount }) => {
  const boxes = Array.from({ length: 7 }, (_, index) => {
    const isHighlighted = index < highlightCount;
    return (
      <View
        key={index}
        className={`flex-1 rounded-full h-2 ${
          isHighlighted ? "bg-primary" : "bg-blue-50"
        }`}
      />
    );
  });

  return <View className="space-x-1 flex-row px-5">{boxes}</View>;
};

export default HighlightedBoxes;
