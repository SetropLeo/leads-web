import React from "react";

import { AssessmentForm, Banner } from "@/components";

import "./styles.css";

const Page = () => {
  return (
    <div>
      <Banner
        bannerTitle="Alma Assessment Form"
        supportImagePath="/images/banner-detail.png"
        supportImageHeight={345}
        supportImageWidth={224}
      />
      <AssessmentForm />
    </div>
  );
};

export default Page;
