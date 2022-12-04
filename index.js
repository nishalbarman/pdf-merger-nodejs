const express = require("express");
const cors = require("cors");
const pdfMerge = require("pdf-merger-js");
const fileUpload = require("express-fileupload");
const app = express();
// app.use(cors);
app.use(fileUpload());
const port = process.env.PORT || 3000;

app.get("/api/render", (req, res) => {
  res.send("Hello World");
});

app.post("/upload", function (req, res, next) {
  // console.log(req.files);
  const file = req.files.photo;
  file.mv("uploads/3.pdf", function (err, result) {
    if (err) {
      throw err;
    } else {
      res.send({
        success: true,
        message: "File Uploaded",
      });
    }
  });
});

app.listen(port, () => {
  console.log("I am live again");
});
