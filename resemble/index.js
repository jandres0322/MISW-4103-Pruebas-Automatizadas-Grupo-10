const compareScreenshots = require('./compareScreenshots');
const fs = require('fs-extra');


const basePath = '../kraken/artefacts';
const scenarios = ['EP001', 'EP002', 'EP004', 'EP005', 'EP006']; 
const versions = ['version1', 'version2']; 
const reportFilePath = `${basePath}/diff/report.html`; 


const comparisonResults = [];


scenarios.forEach((scenario) => {
  const pathVersion1 = `${basePath}/${versions[0]}/${scenario}`;
  const pathVersion2 = `${basePath}/${versions[1]}/${scenario}`;
  const outputPath = `${basePath}/diff/${scenario}`; 

  console.log(`Comparando imágenes para el escenario ${scenario}...`);
  const result = compareScreenshots(pathVersion1, pathVersion2, outputPath);
  comparisonResults.push({ scenario, diffs: result });
});


setTimeout(() => {
  console.log('Generando reporte HTML...');
  generateHtmlReport(reportFilePath, comparisonResults);
}, 5000);


function generateHtmlReport(reportPath, results) {
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reporte de Comparaciones GHOST</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        .scenario { margin-bottom: 40px; }
        img { max-width: 300px; margin-right: 10px; }
        .images { display: flex; flex-wrap: wrap; }
        .diff { margin-top: 10px; }
      </style>
    </head>
    <body>
      <h1>Reporte de Comparaciones de Imágenes</h1>
  `;

  results.forEach(({ scenario, diffs }) => {
    htmlContent += `<div class="scenario"><h2>Escenario: ${scenario}</h2><div class="images">`;
    diffs.forEach((diff) => {
      htmlContent += `
        <div class="diff">
          <p><strong>Imagen:</strong> ${diff.imageName}</p>
          <img src="${diff.version1}" alt="Versión 1">
          <img src="${diff.version2}" alt="Versión 2">
          <img src="${diff.diffImage}" alt="Diferencia">
        </div>
      `;
    });
    htmlContent += `</div></div>`;
  });

  htmlContent += `
    </body>
    </html>
  `;

  fs.writeFileSync('./comparison_report.html', htmlContent);
  console.log(`Reporte generado en: ${reportPath}`);
}
