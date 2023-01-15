import React from "react";
import Faq from "../../../../asstes/Images/faq.png";
import { Collapse } from "antd";
import "../../MobileVersion/MobileView.css";

const { Panel } = Collapse;


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
            <p className="text-white text-justify">{Answers?.ans1}</p>
          </Panel>
          <Panel header="Will my website be mobile-friendly?" key="2">
            <p className="text-white text-justify">{Answers?.ans2}</p>
          </Panel>
          <Panel
            header="How do you guarantee superior product quality?"
            key="3"
          >
            <p className="text-white text-justify">{Answers?.ans3}</p>
          </Panel>
          <Panel
            header="Can you build apps for both iOS and Android?"
            key="4"
          >
            <p className="text-white text-justify">{Answers?.ans4}</p>
          </Panel>
          <Panel
            header="What type of support will my business get when using your products or services?"
            key="5"
          >
            <p className="text-white text-justify">{Answers?.ans5}</p>
          </Panel>
          <Panel
            header="We already have designs; can you work with those?"
            key="6"
          >
            <p className="text-white text-justify">{Answers?.ans6}</p>
          </Panel>
          <Panel
            header="Which social media accounts can you manage for my business?"
            key="7"
          >
            <p className="text-white text-justify">{Answers?.ans7}</p>
          </Panel>
          <Panel
            header="Do you only design logos in identity design?"
            key="8"
          >
            <p className="text-white text-justify">{Answers?.ans8}</p>
          </Panel>
          <Panel
            header="Who owns the final artwork?"
            key="9"
          >
            <p className="text-white text-justify">{Answers?.ans9}</p>
          </Panel>
          <Panel
            header="There are many IoT platforms on the market. Why do you think Quadque is better?"
            key="10"
          >
            <p className="text-white text-justify">{Answers?.ans10}</p>
          </Panel>
          <Panel
            header="Why do I need SEO?"
            key="11"
          >
            <p className="text-white text-justify">{Answers?.ans11}</p>
          </Panel>
          <Panel
            header="What is Target Promotion?"
            key="12"
          >
            <p className="text-white text-justify">{Answers?.ans12}</p>
          </Panel>
          <Panel
            header="What’s better – Email Marketing or WhatsApp Marketing?"
            key="13"
          >
            <p className="text-white text-justify">{Answers?.ans13}</p>
          </Panel>
          <Panel
            header="Why do I need Blogs?"
            key="14"
          >
            <p className="text-white text-justify">{Answers?.ans14}</p>
          </Panel>
          <Panel
            header="What makes an exceptional Digital Marketing campaign?"
            key="15"
          >
            <p className="text-white text-justify">{Answers?.ans15}</p>
          </Panel>
          <Panel
            header="Can you help me automate my organisation’s business processes?"
            key="16"
          >
            <p className="text-white text-justify">{Answers?.ans16}</p>
          </Panel>
          <Panel
            header="Can Quadque assist me with setting up Chatbots?"
            key="17"
          >
            <p className="text-white text-justify">{Answers?.ans17}</p>
          </Panel>
          <Panel
            header="Should I try an Influencer Strategy?"
            key="18"
          >
            <p className="text-white text-justify">{Answers?.ans18}</p>
          </Panel>
          <Panel
            header="What are the advantages of teaming up with Quadque over hiring my own software developers?"
            key="19"
          >
            <p className="text-white text-justify">{Answers?.ans19}</p>
          </Panel>
          <Panel
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
          <Panel
            header="What is a CRM software?"
            key="22"
          >
            <p className="text-white text-justify">{Answers?.ans22}</p>
          </Panel>
          <Panel
            header="What can you do about Content Marketing?"
            key="23"
          >
            <p className="text-white text-justify">{Answers?.ans23}</p>
          </Panel>
          <Panel
            header="Can you build E-commerce sites for online businesses?"
            key="24"
          >
            <p className="text-white text-justify">{Answers?.ans24}</p>
          </Panel>
          <Panel
            header="What is Drupal?"
            key="25"
          >
            <p className="text-white text-justify">{Answers?.ans25}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;

const Answers = {
  ans1: "Certainly! We can help you out with proper and professional website maintenance in addition to development, as it supports achieving stabilised growth and keeping it in check.",
  ans2: "Yes, of course! We will ensure that we develop a responsive website appealing to your visitors and deliver an optimised browsing experience on PC and mobile alike.",
  ans3: "We evaluate the results every two weeks. We test our work and present you with the findings. We'll apply your feedback so you know that you’re getting what you’re paying for.",
  ans4: "Yes, most of the apps that we make support both the iOS and Android mobile platforms. It’s common for people to want their applications to have cross-platform integration, so we use development frameworks such as React and React Native. This enables our apps to support both platforms.",
  ans5: "All of our products and services come with personalised support from our amazing team. We pride ourselves on providing the best possible customer service and making sure that we are available 24/7 for your support.  ",
  ans6: "Probably yes. We prefer to follow our own design process, if possible. This allows us to deliver the best quality and consistency, but we can be flexible with this as well.",
  ans7: "We can manage and create content for the following social media platforms: Facebook, Twitter, Instagram, LinkedIn, Pinterest, and YouTube.  ",
  ans8: "Not at all! We can help with every brand identity touchpoint between a client and their audience. This may include company naming, product naming, logo design, advertising, web design, signage, and many more.  ",
  ans9: "You do. Unless there are separate contracts with third parties such as illustrators, writers, or photographers that state otherwise, all rights to the final artwork transfer to you once your project is paid in full.   ",
  ans10: "The Quadque ecosystem includes several out-of-the-box vertical market products. Most IoT applications are not 100% custom, and therefore you can partially base them on one of those products rather than develop the solutions from scratch. This will decrease development costs and further shorten the time-to-market.  ",
  ans11: "From locating your business through online searches to getting better rankings in Google, you will need SEO. It makes your products and services much more visible. Your website gets a lot more traffic and there are better leads as well.  ",
  ans12: "You can promote your AD with exact customer details like phone number, email address, customer name, country, city etc. All you need to know is the proper way. So, Target Promotion isn’t only based on your customer’s location, age, and demographics.  ",
  ans13: "Email Marketing is still the most effective option for Corporate Marketing. But for Consumer Marketing, it’s better to go for WhatsApp Marketing. WhatsApp Marketing is like one-to-one communication with your target group. So the marketing costs are very minimal here with an exact track record.  ",
  ans14: "Whether you sell products or services, your customers will often want to know about the details of your offerings. A blog not only provides these details but also conveys a message to the customers about your expertise in the industry. As a result, your audience trusts you and your offerings.  ",
  ans15: "It’s all about promoting your digital ADs with the best Digital Marketing experts you can have. You can develop great statics, engaging copies, crispy captions, and attractive motions. But if you cannot place these with the exact customers, you won’t be able to create any value without being a top brand.  ",
  ans16: "We provide Software Development services for the purpose of automation. By working with us, you can implement ERP solutions like SAP software in your organisation. Your business processes like database and inventory management will be more synchronised, effective, and accurate with these systems.  ",
  ans17: "Definitely! We can set up quality AI Chatbots in your organisation according to your specifications. Chatbots are a convenient tool for efficient customer service. In fact, you can easily communicate with a large group in the case of general queries and messages.",
  ans18: "Studies have shown that influencers have a growing impact on customer purchase decisions. You can definitely try this trending strategy for increased brand exposure. The Quadque Digital Marketing team can help you select influencers suited to your products or services. We can build a powerful influencer campaign using the latest social media techniques and appealing content.",
  ans19: "A strong team of software developers is certainly an asset, but the hiring process may take considerable time and effort on your part. If you work with us, you'll have a diverse team of skilled experts ready to tackle any digital challenge your company may face. This means that you'll get quality results quickly and easily.  ",
  ans20: "Yes! We create prototypes before proceeding with any project. Through the prototype, you can get an idea of the final product. You can also provide your feedback. We can add or remove features based on your suggestions if needed.  ",
  ans21: "Sure! We offer visualisation services like TVC and OVC, along with digital banners and even billboards. Our experienced team ensures quality aesthetics that will appeal to your customers. ",
  ans22: "A CRM or Customer Relationship Management module is a part of ERP solutions that can automate your sales and marketing activities. Different businesses, like consumer goods companies, are using this application to track sales, conduct marketing campaigns and manage their leads. Quadque can implement customised CRM applications in your organisation depending on its size and scope.  ",
  ans23: "Quadque offers great content marketing services. We will deeply study your products to come up with engaging captions and copies. We will make sure that the right message reaches the target group and attracts them towards your offerings.  ",
  ans24: "Yes, we can. We focus on building a user-friendly interface with the right extensions. Our sites can integrate across every platform of your business.    ",
  ans25: "Drupal is a popular CMS platform. Drupal can integrate with WordPress and is used for developing E-commerce sites. You can manage every page centrally using this CMS platform.",
};