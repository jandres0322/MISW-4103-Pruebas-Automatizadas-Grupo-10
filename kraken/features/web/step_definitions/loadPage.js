const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I start the startTime', async function(){
    startTime = Date.now();
})

When('I take the endTime', async function(){
    endTime = Date.now()
})



Then('I should see charging time should be less than 3 seconds', async function () {
    // Calcula el tiempo de carga

    const loadTime = (endTime - startTime) / 1000; // Convertir a segundos
  
    // Verifica que el tiempo de carga sea menor a 3 segundos
    assert(loadTime<3, 'I should see charging time should be less than 3 seconds');   
  });