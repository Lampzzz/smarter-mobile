import AuthContainer from "@/components/others/AuthContainer";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";
import AuthTitle from "@/components/text/AuthTitle";

const Weight = () => {
  return (
    <AuthContainer>
      <ProgressContainer highlightCount={4} />

      <AuthTitleContainer>
        <AuthTitle
          maintitle="What's your current weight?"
          subtitle="Weight has a big impact on calculating your daily water goal."
        />
      </AuthTitleContainer>

      <NextContainer path="activitylevel" />
    </AuthContainer>
  );
};

export default Weight;
