
## Cypress

Cypress es una herramienta de automatización de pruebas de interfaz para pruebas de regresión de aplicaciones web . Cypress se ejecuta en Windows , Linux y macOS . La aplicación Cypress es un software de código abierto publicado bajo la licencia MIT 

## Aplicación Objetivo de pruebas

![image](https://github.com/user-attachments/assets/22173b28-de89-491a-8887-5c8d2b3fa9db)

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Cypress

### Preparación del ambiente

Clonar el repositorio

```bash
  git clone https://github.com/jandres0322/MISW-4103-Pruebas-Automatizadas-Grupo-10
  cd MISW-4103-Pruebas-Automatizadas-Grupo-10
```

Ir a la carpeta ```cypress```
``` bash
    cd cypress
```

Ejecutar las dependencias
```
    npm i
```

Para ejecutar el ambiente de Cypress puede usar el siguiente comando:
``` 
    npm run cypress:open
```


### Ejecución de pruebas

1. Correr Ghost localmente

2. Es importante saber que no se debe tener cuenta creada, ya que las pruebas hacen la creación automática de esta con los parametros que se encuentran en los scripts de cada uno de los escenariso de prueba. En caso de tener una cuenta anteriormente creada, es necesario borrar la base de datos del ghost de la siguiente forma:

3. Pararse en el directorio de la aplicación ghost ejecutar el comando rm -f content/data/ghost-local.db

