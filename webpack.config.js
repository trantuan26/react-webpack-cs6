module.exports = {
    entry:'./app/app.jsx',
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    module: {
        rules: [
          { test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
      }
}