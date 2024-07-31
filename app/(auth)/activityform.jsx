import AuthContainer from "@components/Others/AuthContainer";
import ProgressContainer from "@components/Others/ProgressContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";
import AuthTitle from "@components/Text/AuthTitle";

const ActivityForm = () => {
  return (
    <AuthContainer>
      <ProgressContainer highlightCount={5} />

      <AuthTitleContainer>
        <AuthTitle
          maintitle="What is your typical activity level?"
          subtitle="When burning calories, your body needs more fluid to stay hydrated."
        />
      </AuthTitleContainer>

      <NextContainer path="" />
    </AuthContainer>
  );
};

export default ActivityForm;
