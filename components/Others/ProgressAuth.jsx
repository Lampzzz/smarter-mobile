import { View } from "react-native";

const HighlightedBoxes = ({ highlightCount }) => {
  const boxes = Array.from({ length: 7 }, (_, index) => {
    const isHighlighted = index < highlightCount;
    return (
      <View
        key={index}
        className={`w-6 h-2 rounded-full flex-1 ${
          isHighlighted ? "bg-primary" : "bg-blue-50"
        }`}
      />
    );
  });

  return <View className="space-x-1 flex-row">{boxes}</View>;
};

export default HighlightedBoxes;
