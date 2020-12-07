-Inicializamos un proyecto
npm init -y

-Instalar webpack, webpack-cli
npm i webpack webpack-cli -D

-Por defecto webpack empaqueta y genera ficheros partiendo de la ruta
./src/index.js

-Por defecto crea un output de la ruta ./dist/main.js 

-Lo podemos ver creando y ejecutando el script
"build": "webpack --mode production",
"dev": "webpack serve --watch true --mode development"

-Para configurar a gusto webpack se alimenta de un archivo de configuraciones de nombre webpack.config.js

este archivo de configuraciones tiene una estructura que se compone principalmente de:
{
  entry: "",
  output: "",
  module: {
    rules: [
      {
        test: '',
        exclude: '',
        use:{
          loader: '',
          options:{
            presents:[]
          }
        } -D
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({template: ''})
  ],
  devServer: {
    contentBase: '',
    compress: '',
    port: ''
  }

}

-Para el caso particular de javascript necesitamos
-Babel como herramienta de transpilacion: @babel/core
-Loader para webpack: babel-loader
-Present para ES2015+ : @babel/preset-env
-Present para entender jsx @babel/preset-react

-plugin

npm i html-webpack-plugin -D

- en lugar de exportar un objeto podemos exportar una funcion
que retorne un objeto
esa funcion define dos parametros env, parameter

module.export = (env,{mode}) => {
  return
  {
  }
}