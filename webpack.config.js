module.exports = {
    context: __dirname + '/app',
    entry: {
        app : './app.js',
        push: './push.js'
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['env','react'] },
                }],
            },
            {
                test:/\.jsx?$/,
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