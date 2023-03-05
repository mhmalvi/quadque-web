const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const axios = require("axios");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Quadque Technologies Ltd.");
    data = data.replace(/{{description}}/, "Quadque Technologies Ltd.");

    res.send(data);
  });
});

app.get("/blog/:name", function (req, res) {
  console.log(req.params.name);
  const filePath = path.resolve(__dirname, "./build", "index.html");

  axios
    .get(
      `https://latest-server.quadque.tech/api/manage-blogs/${req.params.name}`
    )
    .then((response) => console.log(response))
    .then((err) => console.log(err));

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(
      /{{title}}/,
      "08 Science-Backed Productivity Benefits of Fasting: Tips for Ramadan"
    );
    data = data.replace(
      /{{description}}/,
      "Did you know there are several productivity benefits of fasting that are backed by modern science? Let’s talk about them and discuss some tips for Ramadan."
    );

    data = data.replace(
      /{{og_title}}/,
      "08 Science-Backed Productivity Benefits of Fasting: Tips for Ramadan"
    );
    data = data.replace(
      /{{og_description}}/,
      "Did you know there are several productivity benefits of fasting that are backed by modern science? Let’s talk about them and discuss some tips for Ramadan."
    );
    data = data.replace(
      /{{og_image}}/,
      "https://latest-server.quadque.tech/public/assets/img/blogs/1677746255.jpg"
    );

    res.send(data);
  });
});

app.get("/about", function (req, res) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "About | Sachin Verma");
    data = data.replace(/{{description}}/, "About Sachin Verma");

    res.send(data);
  });
});

app.get("/contact", function (req, res) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Contact | Sachin Verma");
    data = data.replace(/{{description}}/, "Contact Sachin Verma");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (req, res) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Sachin Verma");
    data = data.replace(
      /{{description}}/,
      "Sachin Verma's personal site and blog"
    );

    res.send(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
