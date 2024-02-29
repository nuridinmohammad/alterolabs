"use client";

import React, { useState } from "react";
import { HeadingAbout } from "../molecules/HeadingAbout";
import { OurVision } from "../atoms/OurVision";
import { OurOffice } from "../molecules/OurOffice";
import { FaqHeading } from "../atoms/FaqHeading";
import { FaqCard } from "../atoms/FaqCard";

export function AboutUs() {
  return (
    <>
      <HeadingAbout />
      <OurVision />
      <OurOffice />
      <div className="w-full h-auto px-4 py-20 flex-col justify-start items-start gap-10 inline-flex">
        <FaqHeading />
        <div className="w-full h-auto flex-col justify-start items-start gap-4 inline-flex">
          <FaqCard
            heading="What services does AlteroLabs provide?"
            paragraph="AlteroLabs offers comprehensive digital outsourcing services, including web and app development, AI integration, CGI, 3D design, visual effects, and more. We specialize in creating innovative and captivating digital experiences."
          />
          <FaqCard
            heading="How can I contact AlteroLabs?"
            paragraph="You can reach out to us by filling out the contact form on our website or by sending an email to info@alterolabs.com Our team will respond to your inquiry promptly."
          />
          <FaqCard
            heading="Are the services provided by AlteroLabs customizable?"
            paragraph="Yes, we understand that each client has unique requirements. Our services are highly customizable to meet specific needs and objectives. We work closely with our clients to deliver tailored solutions that align with their goals."
          />
          <FaqCard
            heading="Can AlteroLabs handle projects of any size?"
            paragraph="Absolutely! Whether you have a small-scale project or a large enterprise-level initiative, we have the expertise and resources to handle projects of all sizes. Our team is experienced in managing diverse projects, ensuring quality and timely delivery."
          />
          <FaqCard
            heading="Does AlteroLabs offer ongoing support and maintenance?"
            paragraph="Yes, we provide ongoing support and maintenance services to ensure the smooth operation and optimization of your digital solutions. Our team is dedicated to assisting you even after project completion, offering updates, troubleshooting, and enhancements as needed."
          />
          <FaqCard
            heading="How can I request a quote for my project?"
            paragraph="To request a quote, simply fill out the contact form on our website or email us at info@alterolabs.com Provide us with details about your project, such as the scope, requirements, and timeline. Our team will review your request and provide you with a customized quote."
          />
        </div>
      </div>
    </>
  );
}
