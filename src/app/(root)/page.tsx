import React from "react";

import { AssessmentForm, Banner, ConfirmationModal } from "@/components";

const Page = () => {
  return (
    <div className="main-container">
      <Banner
        bannerTitle={`Get An Assessment\nOf Your Immigration Case`}
        supportImagePath="/images/banner-detail.png"
        supportImageHeight={345}
        supportImageWidth={224}
      />
      <AssessmentForm />
      <ConfirmationModal
        title="Thank you"
        icon="info"
        text={`Your information was submitted to our team of immigration\n attorneys. Expect an email from hello@tryalma.ai.`}
        btnText="Go back to Homepage"
      />
    </div>
  );
};

export default Page;
