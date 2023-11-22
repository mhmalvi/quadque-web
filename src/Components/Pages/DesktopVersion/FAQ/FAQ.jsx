import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import Faq from "../../../../assets/Images/faq.png";
import Icons from "../../../Shared/Icons";
import { Tooltip } from "antd";
import Lottie from "lottie-react";
import { useSpeechSynthesis } from "react-speech-kit";
import speakLogo from "../../../../assets/Lotties/speak.json";

const { Panel } = Collapse;

const FAQ = ({ setLoader }) => {
  const { speak } = useSpeechSynthesis();

  const navigate = useNavigate();
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const synth = window.speechSynthesis;

  useEffect(() => {
    synth.cancel();

    if (location.pathname === "/faq") {
      setTimeout(() => {
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="no index" />
        <title>
          FAQ's - Get The Best Online IT Services for Business - Quadque
        </title>
        <meta
          name="description"
          content="Let's take a quick look at some frequently asked tech-related questions that we receive. We have answered these questions to clear the most common confusion."
        />
        <meta
          name="keywords"
          content="web development services, Software Development services , web and mobile app development services , digital marketing services, ui ux design and development services, online it support services, it services online, it services online"
        />
      </Helmet>

      <div className="case_study_details min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font_primary w-11/12 mx-auto">
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer"
            onClick={() => {
              navigate(`../#contacts`, { replace: true });
            }}
          />
        </div>

        <div
          className="text-5xl font-bold leading-10 capitalize font_title mb-8"
          style={{
            letterSpacing: "0.06em",
          }}
        >
          <Fade left spy={triggerTitleAnimation}>
            <div className="leading-10">FAQ'S</div>
          </Fade>
        </div>

        <div>
          <Fade left cascade spy={triggerTitleAnimation}>
            <img src={Faq} alt="faq" className="m-auto py-4" />
            <div className="text-3xl font-semibold px-10 pb-8 leading-6 text-center">
              Most Popular Questions
            </div>
          </Fade>
        </div>

        <div className="faq w-9/12 mx-auto text-xs pb-4 px-6 mt-10">
          <Fade left cascade spy={triggerAnimation}>
            <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
              {FaqContents.map((content, i) => (
                <Collapse accordion ghost>
                  <Panel
                    className="text-xl mb-8 relative"
                    header={content?.Q}
                    key={i}
                  >
                    <div className="flex items-start">
                      <Tooltip
                        placement="top"
                        title={`Click to "Listen". Double Click to "Stop"`}
                        color={"rgba(90, 90, 90, 0.7)"}
                      >
                        <button
                          onClick={() => {
                            synth.cancel();
                            speak({
                              text: content?.A,
                            });
                          }}
                          onDoubleClick={() => synth.cancel()}
                        >
                          <Lottie
                            className="w-14"
                            animationData={speakLogo}
                            loop={true}
                          />
                        </button>
                      </Tooltip>
                      <p className="text-base font-light text-white text-opacity-95 text-justify ml-4">
                        {content?.A}
                      </p>
                    </div>
                  </Panel>
                </Collapse>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default FAQ;

const FaqContents = [
  {
    Q: "What services does Quadque Technologies offer?",
    A: "We offer a wide range of technology solutions, including custom software development, website design and development, cloud computing solutions, cybersecurity and data protection, and network infrastructure and IT support. We are dedicated to helping our clients achieve their goals through the use of cutting-edge technology and innovative thinking.",
  },
  {
    Q: "Can you provide customized solutions for my business?",
    A: "Absolutely! We pride ourselves on our ability to understand the unique needs of each of our clients and provide customized solutions to help them succeed. Whether you're looking to streamline your operations, improve your online presence, or protect your data, we have the expertise to help you achieve your goals.",
  },
  {
    Q: "What industries does Quadque Technologies serve?",
    A: "We serve a diverse range of industries, including healthcare, finance, retail, manufacturing, and more. We have experience working with businesses of all sizes, from small startups to large enterprises.",
  },
  {
    Q: "Does Quadque Technologies offer IT support services?",
    A: "Yes, we offer IT support services to help keep your business running smoothly. Our team of experienced professionals is available to assist with network infrastructure, software troubleshooting, and other IT-related issues.",
  },
  {
    Q: "How can I contact Quadque Technologies for more information?",
    A: "You can contact us by phone, email, or through our website contact form. Our team isavailable to answer any questions you may have and schedule a consultation to discussyour technology needs.",
  },
  {
    Q: "Does Quadque Technologies have any certifications or accreditations?",
    A: "Yes, we hold various industry-standard certifications and accreditations. These includecertifications in software development methodologies such as Agile and Scrum, as well ascertifications in specific technologies such as AWS and Microsoft Azure.",
  },
  {
    Q: "Does Quadque Technologies have experience working with remote teams?",
    A: "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",
  },
  {
    Q: "Does Quadque Technologies offer training and development for its employees?",
    A: "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",
  },
  {
    Q: "How does Quadque Technologies handle project management?",
    A: "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",
  },
  {
    Q: "Is Quadque Technologies involved in any community or social responsibility initiatives?",
    A: "Yes, we believe in giving back to the community and are involved in various community and social responsibility initiatives. These include mentoring local students, participating in charity events, and supporting local non-profit organizations.",
  },
  // {
  //   Q: "Does Quadque Technologies have any certifications or accreditations?",
  //   A: "Yes, we hold various industry-standard certifications and accreditations. These include certifications in software development methodologies such as Agile and Scrum, as well as certifications in specific technologies such as AWS and Microsoft Azure.",
  // },
  // {
  //   Q: "Does Quadque Technologies have experience working with remote teams?",
  //   A: "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",
  // },
  // {
  //   Q: "Does Quadque Technologies offer training and development for its employees?",
  //   A: "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",
  // },
  // {
  //   Q: "How does Quadque Technologies handle project management?",
  //   A: "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",
  // },
  {
    Q: "How does Quadque Technologies approach software development?",
    A: "We use a variety of software development methodologies such as Agile, Scrum and Waterfall. Our team of experienced developers follows best practices and industry standards to ensure that all software is developed to the highest quality and meets the specific needs of our clients.",
  },
  {
    Q: "Does Quadque Technologies offer website maintenance and support services?",
    A: "Yes, we offer website maintenance and support services to ensure that your website is always up-to-date and running smoothly. Our team can help with updates, backups, security, and troubleshooting.",
  },
  {
    Q: "How does Quadque Technologies approach cloud computing solutions?",
    A: "We have experience with a variety of cloud computing platforms such as AWS, Azure, and Google Cloud. Our team can help you with cloud migration, deployment, and ongoing management and support. We also provide advice on the best cloud solution for your business based on your specific requirements.",
  },
  {
    Q: "Does Quadque Technologies offer cybersecurity and data protection services?",
    A: "Yes, we offer a range of cybersecurity and data protection services to help keep your business and data safe. Our team can assist with threat management, penetration testing, incident response, and compliance with industry regulations.",
  },
  {
    Q: "How can Quadque Technologies help with network infrastructure and IT support?",
    A: "Our team of experienced professionals can assist with the design, implementation, and ongoing management of your network infrastructure. We can also provide IT support services to help with software troubleshooting, network issues, and other IT-related needs.",
  },
];

// const Answers = {
//   ans1: "We offer a wide range of technology solutions, including custom software development, website design and development, cloud computing solutions, cybersecurity and data protection, and network infrastructure and IT support. We are dedicated to helping our clients achieve their goals through the use of cutting-edge technology and innovative thinking.",
//   ans2: "Absolutely! We pride ourselves on our ability to understand the unique needs of each of our clients and provide customized solutions to help them succeed. Whether you're looking to streamline your operations, improve your online presence, or protect your data, we have the expertise to help you achieve your goals.",
//   ans3: "We serve a diverse range of industries, including healthcare, finance, retail, manufacturing, and more. We have experience working with businesses of all sizes, from small startups to large enterprises.",
//   ans4: "Yes, we offer IT support services to help keep your business running smoothly. Our team of experienced professionals is available to assist with network infrastructure, software troubleshooting, and other IT-related issues",
//   ans5: "You can contact us by phone, email, or through our website contact form. Our team is available to answer any questions you may have and schedule a consultation to discuss your technology needs.",
//   ans6: "Yes, we hold various industry-standard certifications and accreditations. These include certifications in software development methodologies such as Agile and Scrum, as well as certifications in specific technologies such as AWS and Microsoft Azure.",
//   ans7: "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",
//   ans8: "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",
//   ans9: "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",
//   ans10:
//     "Yes, we believe in giving back to the community and are involved in various community and social responsibility initiatives. These include mentoring local students, participating in charity events, and supporting local non-profit organizations.",
//   ans11:
//     "Yes, we hold various industry-standard certifications and accreditations. These include certifications in software development methodologies such as Agile and Scrum, as well as certifications in specific technologies such as AWS and Microsoft Azure",
//   ans12:
//     "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",
//   ans13:
//     "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",
//   ans14:
//     "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",
//   ans15:
//     "We use a variety of software development methodologies such as Agile, Scrum and Waterfall. Our team of experienced developers follows best practices and industry standards to ensure that all software is developed to the highest quality and meets the specific needs of our clients.",
//   ans16:
//     "Yes, we offer website maintenance and support services to ensure that your website is always up-to-date and running smoothly. Our team can help with updates, backups, security, and troubleshooting.",
//   ans17:
//     "We have experience with a variety of cloud computing platforms such as AWS, Azure, and Google Cloud. Our team can help you with cloud migration, deployment, and ongoing management and support. We also provide advice on the best cloud solution for your business based on your specific requirements.",
//   ans18:
//     "Yes, we offer a range of cybersecurity and data protection services to help keep your business and data safe. Our team can assist with threat management, penetration testing, incident response, and compliance with industry regulations.",
//   ans19:
//     "Our team of experienced professionals can assist with the design, implementation, and ongoing management of your network infrastructure. We can also provide IT support services to help with software troubleshooting, network issues, and other IT-related needs",
// };
