const express = require("express");
const cors = require("cors");
const pdfMerge = require("pdf-merger-js");
const fs = require("fs");
const multer = require("multer");
const path = require("node:path");
const glob = require("glob");
const app = express();

const port = process.env.PORT || 3000;
let mergedPdfBuffer;

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "_" + file.originalname);
  },
});

let upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Server is working.");
});

app.post("/upload", upload.array("pdf", 2), (req, res) => {
  const fileinfo = req.files;
  glob("uploads/*.pdf", function (er, files) {
    (async () => {
      let merger = new pdfMerge();
      await merger.add(files[0]);
      await merger.add(files[1]); // await merger.save("merged.pdf"); //save under given name and reset the internal document
      mergedPdfBuffer = await merger.saveAsBuffer(); // fs.writeFileSync("merged.pdf", mergedPdfBuffer);

      files.forEach(function (file) {
        fs.unlink(file, function (err) {
          if (err && err.code == "ENOENT") {
            console.info(err);
          } else if (err) {
            console.error("Error occurred while trying to remove file");
          } else {
            console.info(`removed`);
          }
        });
      });

      res.send({
        success: true,
        message: "PDF merged successfully",
        pdf: mergedPdfBuffer,
      });
    })();
  });
});

app.listen(port, () => {
  console.log("Server is listening on: " + port);
});
