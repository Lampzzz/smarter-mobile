import AuthContainer from "@components/Others/AuthContainer";
import ProgressContainer from "@components/Others/ProgressContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";
import AuthTitle from "@components/Text/AuthTitle";
import { ScrollView } from "react-native";
import icons from "@constants/icons";
import ActivityOption from "@components/Form/ActivityOption";

const ActivityForm = () => {
  const activitylvl = [
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          ani
          className="pb-5"
        >
          {activitylvl.map((activity) => (
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

export default ActivityForm;
