import React, { useEffect } from "react";
import Faq from "../../../../asstes/Images/faq.png";
import { Collapse } from "antd";
import "../../MobileVersion/MobileView.css";

const { Panel } = Collapse;

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full text-white mt-20 mb-5 font_primary">
      <h1 className="font_title text-3xl px-6">FAQ's</h1>
      <img src={Faq} alt="" className="m-auto py-4" />
      <div className="text-2xl px-10 pb-8 leading-6 text-center">
        Most Popular Questions
      </div>
      <div className="text-xs pb-4 px-6 ">
        <Collapse accordion ghost>
          {FaqContents.map((content, i) => (
            <Panel header={content?.Q} key={i}>
              <p className="text-white text-justify font_primary">
                {content?.A}
              </p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
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