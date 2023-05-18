import React from "react";
import Image from "next/image";
import imageIntro from "../../public/images/image-intro-desktop.jpg";
import imageIntroMobile from "../../public/images/image-intro-mobile.jpg";
import introLeft from "../../public/images/bg-pattern-intro-left-desktop.svg";
import introLeftMobile from "../../public/images/bg-pattern-intro-left-mobile.svg";
import introRight from "../../public/images/bg-pattern-intro-right-desktop.svg";
import introRightMobile from "../../public/images/bg-pattern-intro-right-mobile.svg";

function Hero() {
  return (
    <section className="pt-24 px-6 md:px-10 lg:px-40 py-40 bg-violet text-light flex flex-col-reverse gap-24 items-center relative md:flex-row">
      <div className="space-y-8 text-center md:text-left md:w-1/2 relative">
        <h1 className="text-5xl md:text-7xl tracking-tight">
          Humanizing your insurance.
        </h1>
        <p className="text-base">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="border-2 uppercase px-7 py-3">View plans</button>
        <Image
          className="absolute -right-[1.5rem] md:hidden"
          src={introRightMobile}
          alt="decorative image"
        ></Image>
        <Image
          className="absolute -left-[1.5rem] -top-[2rem] md:hidden"
          src={introLeftMobile}
          alt="decorative image"
        ></Image>
      </div>

      <div className="object-fill relative md:w-1/2">
        <Image
          src={imageIntroMobile}
          alt="Image of a family holding hands, walking along a sidewalk"
          className="object-fill md:hidden"
        ></Image>
        <Image
          src={imageIntro}
          alt="Image of a family holding hands, walking along a sidewalk "
          className="hidden md:block md:absolute md:-top-[2rem] object-contain"
        ></Image>
      </div>

      <Image
        className="hidden md:block md:absolute md:left-0 md:-bottom-60"
        src={introLeft}
        alt="decorative image"
      ></Image>
      <Image
        className="hidden md:block md:absolute md:right-0 md:top-0"
        src={introRight}
        alt="decorative image"
      ></Image>
    </section>
  );
}

export default Hero;
