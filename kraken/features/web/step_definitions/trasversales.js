const { Given, When, Then } = require('@cucumber/cucumber');


When('I take one screenshot {kraken-string}', async function(path){
    this.driver.saveScreenshot(path);
});