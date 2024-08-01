import { ScrollView } from "react-native";

import AuthContainer from "@/components/others/AuthContainer";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";
import AuthTitle from "@/components/text/AuthTitle";
import icons from "@/constants/icons";
import ActivityOption from "@/components/form/ActivityOption";

const ActivityLevel = () => {
  const activities = [
    {
      id: 1,
      title: "Sedentary",
      description: "Less than 30 minutes a day of intentional exercise.",
      icons: icons.sedentary,
    },
    {
      id: 2,
      title: "Light Activity",
      description:
        "You do intentional exercise everyday for atleast 30 minutes.",
      icons: icons.lightActivity,
    },
    {
      id: 3,
      title: "Moderately Active",
      description:
        "Exercise every day that is equivalent to walking for at least an hour.",
      icons: icons.moderatelyActive,
    },
  ];

  return (
    <AuthContainer>
      <ProgressContainer highlightCount={5} />

      <AuthTitleContainer>
        <AuthTitle
          maintitle="What is your typical activity level?"
          subtitle="When burning calories, your body needs more fluid to stay hydrated."
        />

        <ScrollView showsVerticalScrollIndicator={false} className="pb-5">
          {activities.map((activity) => (
            <ActivityOption
              key={activity.id}
              title={activity.title}
              icons={activity.icons}
              description={activity.description}
            />
          ))}
        </ScrollView>
      </AuthTitleContainer>

      <NextContainer path="" />
    </AuthContainer>
  );
};

export default ActivityLevel;
