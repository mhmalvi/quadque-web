import React from "react";
import Faq from "../../../../asstes/Images/faq.png";
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ = () => {
  return (
    <div className="w-full text-white mt-20 mb-5">
      <div className="text-3xl px-6">
        FAQ's
      </div>
      <img src={Faq} alt="" className="m-auto py-4" />
      <div className="text-2xl px-10 pb-8 leading-6 text-center">
        Most Popular Questions
      </div>
      <div className="text-xs text-center pb-4">
  <Collapse defaultActiveKey={['1']} ghost>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
      </div>
    </div>
  );
};

export default FAQ;
