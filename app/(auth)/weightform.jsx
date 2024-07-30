import AuthContainer from "@components/Others/AuthContainer";
import ProgressContainer from "@components/Others/ProgressContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";
import AuthTitle from "@components/Text/AuthTitle";

const BirthForm = () => {
  return (
    <AuthContainer>
      <ProgressContainer highlightCount={4} />

      <AuthTitleContainer>
        <AuthTitle
          maintitle="What's your current weight?"
          subtitle="Weight has a big impact on calculating your daily water goal."
        />
      </AuthTitleContainer>

      <NextContainer path="" />
    </AuthContainer>
  );
};

export default BirthForm;
