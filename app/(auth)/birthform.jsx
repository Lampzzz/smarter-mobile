import AuthContainer from "@components/Others/AuthContainer";
import ProgressContainer from "@components/Others/ProgressContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";
import AuthTitle from "@components/Text/AuthTitle";

const BirthForm = () => {
  return (
    <AuthContainer>
      <ProgressContainer highlightCount={3} />

      <AuthTitleContainer>
        <AuthTitle maintitle="What's your date of birth?" />
      </AuthTitleContainer>

      <NextContainer path="weightform" />
    </AuthContainer>
  );
};

export default BirthForm;
