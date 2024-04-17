## Pasos para configurar Webpack

### Instalaciones.

1. Iniciar un proyecto de Node.js (Se genera el package.json)
   
   ```sh
    npm init -y 
   ```
2. Ahora instalamos el webpack y webpack-cli
   
   ```sh
   npm install webpack webpack-cli --save-dev
   ```
3. Configuramos un Comando "build" de Script en el package.json

   ```json
      {
      "name": "configuracion-webpack",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
         "build": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
         "webpack": "^5.91.0",
         "webpack-cli": "^5.1.4"
      }
      }
   ```
   La forma de ejecutar el comando es con:
   ```sh
   npm run build
   ```

4. Plugins

   ```sh
      npm install --save-dev html-loader
   ```

   ```sh
      npm install --save-dev html-webpack-plugin
   ```
5. Instalación del Webpack dev Server

   ```sh
      npm install --save-dev webpack-dev-server
   ```

      ```json
      {
      "name": "configuracion-webpack",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
         "build": "webpack",
         "start": "webpack serve --config webpack.config.js --open --port=8080"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
         "webpack": "^5.91.0",
         "webpack-cli": "^5.1.4"
      }
      }
   ```

6. Instalar los loader para css

   ```sh
      npm install --save-dev css-loader
   ```
   ```sh
      npm install --save-dev style-loader
   ```
Nota Adicional:

- Comando para añadir un remoto 

```sh
   git remote add origin git@github.com:MiguelAngelRamos/configuracion-webpack.git
```
