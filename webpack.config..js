// webpack.config.js
module.exports = {
    
    /*
    rest of config...
    */
    target: 'node',

    externals: {
        react: "react"
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
      
};