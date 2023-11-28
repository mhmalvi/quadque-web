import React from "react";
import { Route } from "react-router";
import Career from "./src/Components/Pages/DesktopVersion/Careers/index";
export default (
  <Route>
    <Route path="/#landing" />
    <Route path="/services" />
    <Route path="/services/:slug" />
    <Route path="/#about" />
    <Route path="/#clients" />
    <Route path="/#case-study" />
    <Route path="/#client-speak" />
    <Route path="/#blogs" />
    <Route path="/#start-project" />
    <Route path="/#contacts" />
    <Route path="/services" />
    <Route path="/services/software-development" />
    <Route path="/services/web-development" />
    <Route path="/services/mobile-app-development" />
    <Route path="/services/ai-iot-solutions" />
    <Route path="/services/e-commerce-development" />
    <Route path="/services/cloud-computing-solutions" />
    <Route path="/services/maintenance-and-support" />
    <Route path="/services/cyber-security" />
    <Route path="/services/sap-erp-solutions" />
    <Route path="/case-study" />
    <Route path="/case-study/:slug" />
    <Route path="/blog" />
    <Route path="/blog/:slug" />
    <Route path="/career" element={<Career />} />
    <Route path="/career-detail/:id" />
    <Route path="/faq" />
    <Route path="/blogs" />
    <Route path="/gallery" />
  </Route>
);
