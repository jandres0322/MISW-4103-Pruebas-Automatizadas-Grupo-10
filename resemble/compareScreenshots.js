const fs = require('fs-extra');
const path = require('path');
const resemble = require('resemblejs');

function compareScreenshots(pathVersion1, pathVersion2, outputPath) {
  
  fs.ensureDirSync(outputPath);

  const results = [];
  const imagesVersion1 = fs.readdirSync(pathVersion1);
  const imagesVersion2 = fs.readdirSync(pathVersion2);

  imagesVersion1.forEach((image) => {
    const imagePathV1 = path.join(pathVersion1, image);
    const imagePathV2 = path.join(pathVersion2, image);
    const diffImagePath = path.join(outputPath, `diff_${image}`);

    if (imagesVersion2.includes(image)) {
      console.log(`Comparando: ${image}`);
      const image1 = fs.readFileSync(imagePathV1);
      const image2 = fs.readFileSync(imagePathV2);

      resemble(image1)
        .compareTo(image2)
        .ignoreColors()
        .onComplete((data) => {
          fs.writeFileSync(diffImagePath, data.getBuffer());
          console.log(`Diferencias guardadas en: ${diffImagePath}`);
        });

      results.push({
        imageName: image,
        version1: path.relative('../artefacts', imagePathV1),
        version2: path.relative('../artefacts', imagePathV2),
        diffImage: path.relative('../artefacts', diffImagePath),
      });
    } else {
      console.warn(`La imagen ${image} no existe en la carpeta ${pathVersion2}`);
    }
  });

  return results;
}

module.exports = compareScreenshots;
