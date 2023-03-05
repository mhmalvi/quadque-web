import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";

const serverRenderer = (req, res, next) => {
  const context = {};
  const app = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const markup = ReactDOMServer.renderToString(app);
  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>React SSR</title>
        </head>
        <body>
          <div id="app">${markup}</div>
          <script src="/bundle.js" defer></script>
        </body>
      </html>
    `);
  }
};

export default serverRenderer;
