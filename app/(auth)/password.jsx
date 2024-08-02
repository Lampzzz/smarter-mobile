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
        <AuthTitle
          maintitle="Set a secure password"
          subtitle="Choose a password to keep your account safe and sound."
        />
        <TextField label="Password" otherStyles="mb-5" />
        <TextField label="Confirm Password" />
      </AuthTitleContainer>
      <NextContainer path="userinfo" about="agreement" />
    </AuthContainer>
  );
};

export default Password;
