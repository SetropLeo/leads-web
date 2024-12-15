import Image from "next/image";
import React from "react";
import "./styles.css";

const Banner = ({
  bannerTitle,
  supportImagePath,
  supportImageHeight,
  supportImageWidth,
}: BannerComponentProps) => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <div className="banner-image-container">
          <Image
            src={supportImagePath}
            alt="banner ornament"
            priority
            width={supportImageHeight}
            height={supportImageWidth}
            className="banner-image"
          />
        </div>
        <div className="banner-content-container">
          <Image src="/logo.png" alt="logo" width={65} height={24} />
          <h3 className="banner-title">{bannerTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;

interface BannerComponentProps {
  supportImagePath: string;
  bannerTitle: string;
  supportImageHeight: number;
  supportImageWidth: number;
}
