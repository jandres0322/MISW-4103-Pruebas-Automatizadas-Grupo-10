# Guía de instalación y ejecución de pruebas con Kraken para Ghost

## Descripción

Este proyecto utiliza **Kraken** para realizar pruebas automatizadas en la aplicación web **Ghost** (http://localhost:2368/ghost/). Kraken es un framework de pruebas basado en **Cucumber** que permite escribir pruebas en un formato legible por humanos. En este proyecto se aplican los patrones de diseño **GivenWhenThen** y **PageObject**, y **Faker** se utiliza para generar datos aleatorios en las pruebas.

---

## Instalación

### Prerequisitos

1. **Node.js**: Kraken está basado en Node.js. Asegúrate de tener **Node.js** instalado. Si no lo tienes, puedes instalarlo desde [aquí](https://nodejs.org/).

2. **Git**: Asegúrate de tener **Git** instalado para gestionar el código del proyecto. Si no lo tienes, puedes instalarlo desde [aquí](https://git-scm.com/).

3. **Ghost instalado**: Asegúrate de tener la aplicación **Ghost** corriendo en tu máquina local. Puedes instalarla desde [aquí](https://ghost.org/docs/install/).

### Pasos de instalación

1. **Clona el repositorio**

   Clona este repositorio en tu máquina local usando Git:

   ```bash
   git clone https://github.com/jandres0322/MISW-4103-Pruebas-Automatizadas-Grupo-10.git
   cd MISW-4103-Pruebas-Automatizadas-Grupo-10
   cd kraken
   ```

   Una vez dentro del proyecto, instala todas las dependencias necesarias:

   ```bash
   npm install
   ```

   Asegúrate de que Ghost esté corriendo en http://localhost:2368/ghost/ antes de ejecutar las pruebas.
   ```bash
   http://localhost:2368/ghost/
   ```
2. **Ejecutar pruebas**

   Abrir el archivos properties.json y cambiar las credenciales: url, username y password según haya configurado el ambiente.

   Para ejecutar las pruebas con Kraken, utiliza el siguiente comando en tu terminal gitbash:
  ```bash
   ./node_modules/kraken-node/bin/kraken-node run
   ```

   Ejecutar los escenarios de forma individual de la siguiente manera: 

   ```bash
   ./node_modules/kraken-node/bin/kraken-node run EP-001-Crear-Cuenta.feature --properties=properties.json
   ```

   Manejo de Características Ejecutadas
   
   Algunas características ya han sido ejecutadas y se encuentran en la carpeta `featuresEjecutados`. Si deseas volver a ejecutar o probar características específicas, simplemente muévelas a la carpeta `features`.
   
   1. **Mover el Archivo de Característica**: Copia o mueve el archivo `.feature` que deseas probar desde la carpeta `featuresEjecutados` a la carpeta `features`.
   2. **Ejecutar la Prueba**: Una vez que la característica esté en la carpeta `features`, puedes ejecutarla con el comando mencionado arriba.
