const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const NODE_ENV = process.env.NODE_ENV

const API_URLS = {
  dev: 'http://localhost:3000/api',
  production: 'https://blabla.com'
}

const API_URL = JSON.stringify(API_URLS[NODE_ENV])

let VERSION

if (typeof process.env.BUILD_NUMBER !== 'undefined') {
  VERSION = JSON.stringify(process.env.BUILD_NUMBER)
}

const setPath = folderName => path.join(__dirname, folderName)

const buildingForLocal = () => {
  return NODE_ENV === 'dev'
}

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].[hash].css'
  //, disable: process.env.NODE_ENV === "development" // I prefer to have this not only for production
})

const config = {
  /**
     * You can use these too for bigger projects. For now it is 0 conf mode for me!
     */
  entry: path.join(setPath('src'), 'main.js'),
  output: {
    filename: 'bundle.js'
  },
  mode: buildingForLocal() ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      favicon: './src/assets/img/icon.png',
      title: 'Groupomania',
      filename: 'index.html',
      inject: true,
      template: path.join(setPath('./public'), 'index.html'),
      isLocalBuild: buildingForLocal()
    }),
    // extractCSS,
    new webpack.DefinePlugin({
      API_URL,
      DEBUG: process.env.NODE_ENV === 'dev',
      BASE_VERSION: JSON.stringify(require('./package.json').version),
      VERSION
    })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  // In order to resolve error "Module not found: Error: Can't resolve 'fs'"
  // https://github.com/react-boilerplate/react-boilerplate/issues/2279
  node: { fs: 'empty' },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      // https://odan.github.io/2021/01/07/webpack-bootstrap-icons.html
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    }, {
      test: /\.(png|jpe?g|gif|otf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }, {
      // https://github.com/webpack-contrib/sass-loader
      test: /\.(scss)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          // url: false, // ignore url in css
          minimize: NODE_ENV === 'dev',
          sourceMap: NODE_ENV === 'dev' // only source map if development (though it looks like the minimization destroys the sourceMap anyway)
        }
      },
      'resolve-url-loader',
      'sass-loader?sourceMap'
      ]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(html)$/,
      use: [{
        loader: 'html-loader',
        options: {
          // https://github.com/webpack-contrib/html-loader
          interpolate: 'require' // can be true to interpolate all or "require" to just interpolate require
        }
      }]
    }]
  }
}

module.exports = config
