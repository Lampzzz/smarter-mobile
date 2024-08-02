import AuthTitle from "@/components/text/AuthTitle";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthContainer from "@/components/others/AuthContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";

const Verify = () => {
  return (
    <AuthContainer>
      <ProgressContainer />
      <AuthTitleContainer>
        <AuthTitle
          maintitle="Enter your OTP"
          subtitle="We've sent the OTP to la******@gmail.com"
        />
      </AuthTitleContainer>
      <NextContainer path="password" about="agreement" label="Submit" />
    </AuthContainer>
  );
};

export default Verify;
