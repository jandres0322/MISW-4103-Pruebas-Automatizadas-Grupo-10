const { After } = require('@cucumber/cucumber');

After(async function () {
    // Recarga la sesión después de cada escenario para empezar limpio
    await this.driver.reloadSession();
});