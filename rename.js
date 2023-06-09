const fs = require("fs");
const path = require("path");

const directory = path.join(__dirname, "build", "static", "js");

const copyFile = async (source, target, directory) => {
  fs.copyFile(
    path.join(directory, source),
    path.join(directory, target),
    (err) => {
      if (err) throw err;
      console.log(`Copied ${source} to ${target}`);
    }
  );
};

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if (file.startsWith("main") && file.endsWith(".js") && file !== "main.js") {
      const jsFilename = file;
      const licenseFilename = `${jsFilename}.LICENSE.txt`;
      const mapFilename = `${jsFilename}.map`;

      const newJsFilename = "main.js";
      const newLicenseFilename = "main.js.LICENSE.txt";
      const newMapFilename = "main.js.map";

      copyFile(jsFilename, newJsFilename, directory);
      copyFile(licenseFilename, newLicenseFilename, directory);
      copyFile(mapFilename, newMapFilename, directory);
    }
  }
});

const cssDirectory = path.join(__dirname, "build", "static", "css");

fs.readdir(cssDirectory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if (
      file.startsWith("main") &&
      file.endsWith(".css") &&
      file !== "main.css"
    ) {
      const cssFilename = file;
      const mapFilename = `${cssFilename}.map`;
      const newCssFilename = "main.css";
      const newMapFilename = "main.css.map";

      copyFile(cssFilename, newCssFilename, cssDirectory);
      copyFile(mapFilename, newMapFilename, cssDirectory);
    }
  }
});

// main.bc8a43e3.js
