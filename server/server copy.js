// =======================================================
import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToPipeableStream(<App />)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

// =======================================================
// import React from "react";
// import express from "express";
// import path from "path";
// import fs from "fs";
// import App from "../src/App";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";

// const PORT = 8000;
// const app = express();

// const router = express.Router();

// app.use("/build", express.static("build"));

// app.get("*", (req, res) => {
//   const context = {};
//   const appComponent = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <App />
//     </StaticRouter>
//   );

//   const indexFile = path.resolve("./build/index.html");
//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.log("error !");
//       return res.status(500).send("Errorr!!");
//     }
//     return res.send(
//       data.replace(
//         `<div id="root"></div>`,
//         `<div id="root">${appComponent}</div>`
//       )
//     );
//   });
// });

// router.use(
//   express.static(path.resolve(__dirname, "..", "build"), { maxAge: "10d" })
// );

// app.use(router);

// // app.use(express.static('./build'))
// app.listen(PORT, () => {
//   console.log(`SSR running on port ${PORT}`);
// });
