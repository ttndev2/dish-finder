const fs = require("fs");
const path = require("path");

const directory = path.join(__dirname, "build", "static", "js");

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

      fs.rename(
        path.join(directory, jsFilename),
        path.join(directory, newJsFilename),
        (err) => {
          if (err) throw err;
          console.log(`Renamed ${jsFilename} to ${newJsFilename}`);
        }
      );

      fs.rename(
        path.join(directory, licenseFilename),
        path.join(directory, newLicenseFilename),
        (err) => {
          if (err) throw err;
          console.log(`Renamed ${licenseFilename} to ${newLicenseFilename}`);
        }
      );

      fs.rename(
        path.join(directory, mapFilename),
        path.join(directory, newMapFilename),
        (err) => {
          if (err) throw err;
          console.log(`Renamed ${mapFilename} to ${newMapFilename}`);
        }
      );
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

      fs.rename(
        path.join(cssDirectory, cssFilename),
        path.join(cssDirectory, newCssFilename),
        (err) => {
          if (err) throw err;
          console.log(`Renamed ${cssFilename} to ${newCssFilename}`);
        }
      );

      fs.rename(
        path.join(cssDirectory, mapFilename),
        path.join(cssDirectory, newMapFilename),
        (err) => {
          if (err) throw err;
          console.log(`Renamed ${mapFilename} to ${newMapFilename}`);
        }
      );
    }
  }
});

// main.bc8a43e3.js
