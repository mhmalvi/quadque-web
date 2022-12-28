import React from "react";
import Faq from "../../../../asstes/Images/faq.png";
import { Collapse } from "antd";
const { Panel } = Collapse;

const text = `
  All of our products and services come with personalized support from our amazing team. We pride ourselves on providing the best customer service possible and making sure that we are available 24/7 for your support.
`;

const FAQ = () => {
  return (
    <div className="w-full text-white mt-20 mb-5">
      <div className="text-3xl px-6">FAQ's</div>
      <img src={Faq} alt="" className="m-auto py-4" />
      <div className="text-2xl px-10 pb-8 leading-6 text-center">
        Most Popular Questions
      </div>
      <div className="text-xs pb-4 px-6">
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel header="Will you maintain my site for me?" key="1">
            <p className="text-white text-justify">{text}</p>
          </Panel>
          <Panel header="Will my website be mobile-friendly?" key="2">
            <p className="text-white text-justify">{text}</p>
          </Panel>
          <Panel
            header="What type of support do you provide my business on your products or services?"
            key="3"
          >
            <p className="text-white text-justify">{text}</p>
          </Panel>
          <Panel
            header="What type of support do you provide my business on your products or services?"
            key="3"
          >
            <p className="text-white text-justify">{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;
