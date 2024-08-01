import TextField from "@components/Form/TextField";
import AuthTitle from "@components/Text/AuthTitle";
import ProgressContainer from "@components/Others/ProgressContainer";
import NextContainer from "@components/Others/NextContainer";
import AuthContainer from "@components/Others/AuthContainer";
import AuthTitleContainer from "@components/Others/AuthTitleContainer";

const NameForm = () => {
  return (
    <AuthContainer>
      <ProgressContainer highlightCount={1} />
      <AuthTitleContainer>
        <AuthTitle
          maintitle="What shall we call you?"
          subtitle="Only used in your profile and notifications."
        />
        <TextField label="Nickname" />
      </AuthTitleContainer>
      <NextContainer path="genderform" />
    </AuthContainer>
  );
};

export default NameForm;
