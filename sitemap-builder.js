require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./routes").default;
// const router = require("./src/Components/Pages/DesktopVersion/layout/index").default;
// const router1 = require("./src/Components/Pages/MobileVersion/layout/index").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
  .build("https://www.quadque.tech")
  .save("./public/sitemap.xml");
