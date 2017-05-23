module.exports = {
    context: __dirname + '/app',
    entry: {
        index : './index.js'
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { 
                        presets: ['es2015','react'],
                        plugins:[ 'syntax-class-properties', 'transform-class-properties'] 
                    },
                }],
            },
            {
                test:/\.jsx?$/,
                enforce:"pre",
                exclude:/node_modules/,
                use:[{
                    loader:'eslint-loader'
                }]
            }
        ]   
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    }
};