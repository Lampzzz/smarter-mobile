import TextField from "@/components/form/TextField";
import AuthTitle from "@/components/text/AuthTitle";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthContainer from "@/components/others/AuthContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";

const Email = () => {
  return (
    <AuthContainer>
      <ProgressContainer />
      <AuthTitleContainer>
        <AuthTitle maintitle="Create your account" />
        <TextField label="Email" />
      </AuthTitleContainer>
      <NextContainer path="verify" about="agreement" label="Verify with OTP" />
    </AuthContainer>
  );
};

export default Email;
