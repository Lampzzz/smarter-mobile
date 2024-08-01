import { useState } from "react";

import AuthContainer from "@/components/others/AuthContainer";
import ProgressContainer from "@/components/others/ProgressContainer";
import NextContainer from "@/components/others/NextContainer";
import AuthTitleContainer from "@/components/others/AuthTitleContainer";
import AuthTitle from "@/components/text/AuthTitle";

const Birthdate = () => {
  return (
    <AuthContainer>
      <ProgressContainer highlightCount={3} />

      <AuthTitleContainer>
        <AuthTitle
          maintitle="What's your date of birth?"
          subtitle="Birthday are nature's nudge to drink more water, and we just to greet you!"
        />
      </AuthTitleContainer>

      <NextContainer path="weight" />
    </AuthContainer>
  );
};

export default Birthdate;
