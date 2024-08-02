import TextField from "@/components/form/TextField";
import AuthTitle from "@/components/text/AuthTitle";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthContainer from "@/components/others/AuthContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";

const Password = () => {
  return (
    <AuthContainer>
      <ProgressContainer />
      <AuthTitleContainer>
        <AuthTitle maintitle="Create a secure password" />
        <TextField label="Password" otherStyles="mb-5" />
        <TextField label="Confirm Password" />
      </AuthTitleContainer>
      <NextContainer path="" about="agreement" />
    </AuthContainer>
  );
};

export default Password;
