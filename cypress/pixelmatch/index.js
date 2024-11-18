const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const sharp = require('sharp'); // Añadir sharp para redimensionar imágenes

const version1 = "v5.98.1";
const version2 = "v4.5.0";

// Ruta base donde están las versiones de screenshots
const screenshotsBasePath = path.join(__dirname, '..', 'cypress/screenshots');

const version1Path = path.join(screenshotsBasePath, version1);
const version2Path = path.join(screenshotsBasePath, version2);

const scenariosToCompare = ["EP-007", "EP-001", "EP-016", "EP-018", "EP-020"];
let comparisonResults = [];

(async () => {
  const pixelmatch = (await import('pixelmatch')).default;

  if (fs.existsSync(version1Path) && fs.existsSync(version2Path)) {
    scenariosToCompare.forEach((scenarioName) => {
      const scenarioVersion1Path = fs.readdirSync(version1Path).find(dir => dir.toUpperCase().includes(scenarioName));
      const scenarioVersion2Path = fs.readdirSync(version2Path).find(dir => dir.toUpperCase().includes(scenarioName));

      console.log(`Comparando escenario ${scenarioVersion1Path}...`);

      if (scenarioVersion1Path && scenarioVersion2Path) {
        const fullScenarioVersion1Path = path.join(version1Path, scenarioVersion1Path);
        const fullScenarioVersion2Path = path.join(version2Path, scenarioVersion2Path);

        if (fs.existsSync(fullScenarioVersion1Path) && fs.existsSync(fullScenarioVersion2Path)) {
          const screenshotsVersion1 = fs.readdirSync(fullScenarioVersion1Path);
          const screenshotsVersion2 = fs.readdirSync(fullScenarioVersion2Path);

          screenshotsVersion1.forEach(async (screenshot) => {
            if (screenshotsVersion2.includes(screenshot)) {
              const referenceImagePath = path.join(fullScenarioVersion1Path, screenshot);
              const testImagePath = path.join(fullScenarioVersion2Path, screenshot);
              const tempResizedImagePath = path.join(fullScenarioVersion2Path, `resized-${screenshot}`);
              const diffImagePath = path.join(fullScenarioVersion2Path, `diff-${screenshot}`);

              try {
                // Cargar imágenes con sharp
                const img1 = sharp(referenceImagePath);
                const img2 = sharp(testImagePath);

                const metadata1 = await img1.metadata();
                const metadata2 = await img2.metadata();

                // Redimensionar para que ambas tengan el mismo tamaño
                if (metadata1.width !== metadata2.width || metadata1.height !== metadata2.height) {
                  console.log(`Redimensionando ${screenshot} para que ambas imágenes tengan el mismo tamaño.`);
                  await img2.resize(metadata1.width, metadata1.height).toFile(tempResizedImagePath);
                }

                // Leer las imágenes redimensionadas y compararlas con pixelmatch
                const img1Buffer = await sharp(referenceImagePath).png().toBuffer();
                const img2Buffer = await sharp(tempResizedImagePath).png().toBuffer();

                const img1PNG = PNG.sync.read(img1Buffer);
                const img2PNG = PNG.sync.read(img2Buffer);
                const { width, height } = img1PNG;
                const diff = new PNG({ width, height });

                const numDiffPixels = pixelmatch(img1PNG.data, img2PNG.data, diff.data, width, height, { threshold: 0.1 });

                console.log(`Diferencias encontradas en ${scenarioName} - ${screenshot}: ${numDiffPixels} píxeles diferentes.`);

                // Guardar la imagen de diferencias
                fs.writeFileSync(diffImagePath, PNG.sync.write(diff));

                // Guardar el resultado de la comparación
                comparisonResults.push({
                  scenario: scenarioName,
                  screenshot,
                  numDiffPixels,
                  diffImagePath,
                });

              } catch (error) {
                console.error(`Error procesando la imagen ${screenshot}:`, error);
              }
            }
          });
        } else {
          console.error(`Error: La carpeta para el escenario ${scenarioName} no existe en ambas versiones.`);
        }
      } else {
        console.error(`Error: No se encontró una carpeta que coincida con el escenario ${scenarioName} en ambas versiones.`);
      }
    });

    // Guardar el reporte en un archivo JSON al finalizar todas las comparaciones
    fs.writeFileSync('comparison-report.json', JSON.stringify(comparisonResults, null, 2));
    console.log('Reporte de comparación guardado en comparison-report.json');

    // Generar reporte en HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte de Comparación de Imágenes</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          table, th, td { border: 1px solid #ddd; padding: 8px; }
          th { background-color: #f2f2f2; }
          img { max-width: 300px; }
        </style>
      </head>
      <body>
        <h1>Reporte de Comparación de Imágenes</h1>
        <table>
          <thead>
            <tr>
              <th>Escenario</th>
              <th>Captura de Pantalla</th>
              <th>Número de Píxeles Diferentes</th>
              <th>Imagen de Diferencias</th>
            </tr>
          </thead>
          <tbody>
            ${comparisonResults.map(result => `
              <tr>
                <td>${result.scenario}</td>
                <td>${result.screenshot}</td>
                <td>${result.numDiffPixels}</td>
                <td><img src="${result.diffImagePath}" alt="Diferencias"></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </body>
      </html>
    `;

    fs.writeFileSync('comparison-report.html', htmlContent);
    console.log('Reporte de comparación guardado en comparison-report.html');
  } else {
    console.error(`Error: Una o ambas carpetas de versiones no existen: ${version1Path}, ${version2Path}`);
    process.exit(1);
  }
})();
