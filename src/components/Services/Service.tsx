import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceType } from "@/utils/types";

const Service = () => {
 
  const services: serviceType[] = [
    {
      name: "UI/UX Design",
      description:
        "A great user experience is essential for success. Our design team focuses on creating intuitive and visually appealing interfaces that make your users feel at home. From wireframing to prototyping, we'll ensure your app or website is both functional.",
      animate: "zoom-in",
      steps: [
        {
          name: "User Research",
          description:
            "Conduct research to understand your target audience's behavior, needs, and preferences.",
        },
        {
          name: "Design Strategy",
          description:
            "Develop a design strategy that aligns with your business goals and user requirements.",
        },
        {
          name: "Wireframing and Prototyping",
          description:
            "Create visual representations of the interface and user flow",
        },
        {
          name: "Design Implementation",
          description: "Apply the design elements to your website or app.",
        },
        {
          name: "Usability Testing and Iteration",
          description:
            "Continuously test and refine the design based on user feedback.",
        },
      ],
    },
    {
      name: "Website",
      description:
        "Our team specializes in crafting stunning, user-friendly websites that not only look great but also drive results. From e-commerce platforms to content management systems, we have the expertise to build a website that perfectly aligns with your business goals.",
      animate: "zoom-in",
      steps: [
        {
          name: "In-depth Consultation",
          description:
            "Understand your client's business objectives, target audience, and desired features.",
        },
        {
          name: "Wireframing and Prototyping",
          description:
            "Create visual representations of the website's structure and functionality.",
        },
        {
          name: "Design and Development",
          description:
            "Build the website using cutting-edge technologies and design principles.",
        },
        {
          name: "Testing and Quality Assurance",
          description:
            "Thoroughly test the website for compatibility, performance, and functionality.",
        },
        {
          name: "Deployment and Maintenance",
          description:
            "Launch the website and provide ongoing maintenance and support.",
        },
      ],
    },
    {
      name: "App",
      description:
        "Need a mobile app to reach a wider audience? We can help you create innovative and engaging apps that offer a seamless user experience. Whether you're looking for a native or cross-platform solution, we have the skills to bring your app idea to life.",
      animate: "zoom-in",
      steps: [
        {
          name: "Requirements Gathering",
          description:
            "Understand your client's app concept, target audience, and desired features.",
        },
        {
          name: "Design and Prototyping",
          description:
            "Create wireframes, mockups, and prototypes to visualize the app's interface and functionality.",
        },
        {
          name: "Development",
          description:
            "Build the app using the appropriate programming languages and frameworks.",
        },
        {
          name: "Testing and Quality Assurance",
          description:
            "Rigorously test the app on various devices and platforms to ensure its quality.",
        },
        {
          name: "Deployment and App Store Submission",
          description:
            "Submit the app to the relevant app stores and provide ongoing maintenance and support.",
        },
      ],
    },
  ];
  console.log(services);
  return (
    <div className="container bg-slate-100">
      <div className="justify-center flex flex-col items-center overflow-hidden ">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="font-extrabold text-3xl mb-5 "
        >
          From Concept to Creation
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="font-normal text-xl"
        >
          We provide you -
        </p>
      </div>
      <section className="flex flex-row gap-5 justify-center items-center flex-wrap my-10">
        {services?.map((item: serviceType) => (
          <ServiceCard key={item?.name} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Service;
