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
    <div className="w-full text-white mt-20 mb-5">
      <h1 className="font_title text-3xl px-6">FAQ's</h1>
      <img src={Faq} alt="" className="m-auto py-4" />
      <div className="text-2xl px-10 pb-8 leading-6 text-center">
        Most Popular Questions
      </div>
      <div className="text-xs pb-4 px-6">
        <Collapse accordion ghost>
          <Panel
            header="What services does Quadque Technologies offer?"
            key="1"
          >
            <p className="text-white text-justify">{Answers?.ans1}</p>
          </Panel>

          <Panel
            header="Can you provide customized solutions for my business?"
            key="2"
          >
            <p className="text-white text-justify">{Answers?.ans2}</p>
          </Panel>

          <Panel
            header="What industries does Quadque Technologies serve??"
            key="3"
          >
            <p className="text-white text-justify">{Answers?.ans3}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies offer IT support services?"
            key="4"
          >
            <p className="text-white text-justify">{Answers?.ans4}</p>
          </Panel>

          <Panel
            header="How can I contact Quadque Technologies for more information?"
            key="5"
          >
            <p className="text-white text-justify">{Answers?.ans5}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies have any certifications or accreditations?"
            key="6"
          >
            <p className="text-white text-justify">{Answers?.ans6}</p>
          </Panel>

          <Panel
            header=": Does Quadque Technologies have experience working with remote teams?"
            key="7"
          >
            <p className="text-white text-justify">{Answers?.ans7}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies offer training and development for its employees?"
            key="8"
          >
            <p className="text-white text-justify">{Answers?.ans8}</p>
          </Panel>

          <Panel
            header="How does Quadque Technologies handle project management?"
            key="9"
          >
            <p className="text-white text-justify">{Answers?.ans9}</p>
          </Panel>

          <Panel
            header="Is Quadque Technologies involved in any community or social responsibility initiatives?"
            key="10"
          >
            <p className="text-white text-justify">{Answers?.ans10}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies have any certifications or accreditations?"
            key="11"
          >
            <p className="text-white text-justify">{Answers?.ans11}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies have experience working with remote teams?"
            key="12"
          >
            <p className="text-white text-justify">{Answers?.ans12}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies offer training and development for its employees?"
            key="13"
          >
            <p className="text-white text-justify">{Answers?.ans13}</p>
          </Panel>

          <Panel
            header="How does Quadque Technologies handle project management?"
            key="14"
          >
            <p className="text-white text-justify">{Answers?.ans14}</p>
          </Panel>

          <Panel
            header="How does Quadque Technologies approach software development?"
            key="15"
          >
            <p className="text-white text-justify">{Answers?.ans15}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies offer website maintenance and support services?"
            key="16"
          >
            <p className="text-white text-justify">{Answers?.ans16}</p>
          </Panel>

          <Panel
            header="How does Quadque Technologies approach cloud computing solutions?"
            key="17"
          >
            <p className="text-white text-justify">{Answers?.ans17}</p>
          </Panel>

          <Panel
            header="Does Quadque Technologies offer cybersecurity and data protection services?"
            key="18"
          >
            <p className="text-white text-justify">{Answers?.ans18}</p>
          </Panel>

          <Panel
            header="How can Quadque Technologies help with network infrastructure and IT support?"
            key="19"
          >
            <p className="text-white text-justify">{Answers?.ans19}</p>
          </Panel>

          {/* <Panel
            header="Will I be able to see demo or prototype versions?"
            key="20"
          >
            <p className="text-white text-justify">{Answers?.ans20}</p>
          </Panel>

          <Panel
            header="I need an OVC for my campaign. Can you provide me with this service?"
            key="21"
          >
            <p className="text-white text-justify">{Answers?.ans21}</p>
          </Panel>

          <Panel header="What is a CRM software?" key="22">
            <p className="text-white text-justify">{Answers?.ans22}</p>
          </Panel>

          <Panel header="What can you do about Content Marketing?" key="23">
            <p className="text-white text-justify">{Answers?.ans23}</p>
          </Panel>

          <Panel
            header="Can you build E-commerce sites for online businesses?"
            key="24"
          >
            <p className="text-white text-justify">{Answers?.ans24}</p>
          </Panel>

          <Panel header="What is Drupal?" key="25">
            <p className="text-white text-justify">{Answers?.ans25}</p>
          </Panel> */}
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;

const Answers = {
  ans1: "We offer a wide range of technology solutions, including custom software development, website design and development, cloud computing solutions, cybersecurity and data protection, and network infrastructure and IT support. We are dedicated to helping our clients achieve their goals through the use of cutting-edge technology and innovative thinking.",

  ans2: "Absolutely! We pride ourselves on our ability to understand the unique needs of each of our clients and provide customized solutions to help them succeed. Whether you're looking to streamline your operations, improve your online presence, or protect your data, we have the expertise to help you achieve your goals.",

  ans3: "We serve a diverse range of industries, including healthcare, finance, retail, manufacturing, and more. We have experience working with businesses of all sizes, from small startups to large enterprises.",

  ans4: "Yes, we offer IT support services to help keep your business running smoothly. Our team of experienced professionals is available to assist with network infrastructure, software troubleshooting, and other IT-related issues",

  ans5: "You can contact us by phone, email, or through our website contact form. Our team is available to answer any questions you may have and schedule a consultation to discuss your technology needs.",

  ans6: "Yes, we hold various industry-standard certifications and accreditations. These include certifications in software development methodologies such as Agile and Scrum, as well as certifications in specific technologies such as AWS and Microsoft Azure.",

  ans7: "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",

  ans8: "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",

  ans9: "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",

  ans10:
    "Yes, we believe in giving back to the community and are involved in various community and social responsibility initiatives. These include mentoring local students, participating in charity events, and supporting local non-profit organizations.",

  ans11:
    "Yes, we hold various industry-standard certifications and accreditations. These include certifications in software development methodologies such as Agile and Scrum, as well as certifications in specific technologies such as AWS and Microsoft Azure",

  ans12:
    "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",

  ans13:
    "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",

  ans14:
    "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",

  ans15:
    "We use a variety of software development methodologies such as Agile, Scrum and Waterfall. Our team of experienced developers follows best practices and industry standards to ensure that all software is developed to the highest quality and meets the specific needs of our clients.",

  ans16:
    "Yes, we offer website maintenance and support services to ensure that your website is always up-to-date and running smoothly. Our team can help with updates, backups, security, and troubleshooting.",

  ans17:
    "We have experience with a variety of cloud computing platforms such as AWS, Azure, and Google Cloud. Our team can help you with cloud migration, deployment, and ongoing management and support. We also provide advice on the best cloud solution for your business based on your specific requirements.",

  ans18:
    "Yes, we offer a range of cybersecurity and data protection services to help keep your business and data safe. Our team can assist with threat management, penetration testing, incident response, and compliance with industry regulations.",

  ans19:
    "Our team of experienced professionals can assist with the design, implementation, and ongoing management of your network infrastructure. We can also provide IT support services to help with software troubleshooting, network issues, and other IT-related needs",
};
