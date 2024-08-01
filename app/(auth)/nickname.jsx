import TextField from "@/components/form/TextField";
import AuthTitle from "@/components/text/AuthTitle";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthContainer from "@/components/others/AuthContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";

const Nickname = () => {
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
      <NextContainer path="gender" />
    </AuthContainer>
  );
};

export default Nickname;
