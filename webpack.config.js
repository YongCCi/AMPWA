module.exports = {
    context: __dirname + '/app',
    entry: {
        app : './app.js',
        push: './push.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['env'] },
                }],
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader: 'jshint-loader'
            }
        ],        
        /*
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                options:{
                    presets:['es2015']
                }
            },
            {
                test:/\.jsx?$/,
                exclude:/(node_modules)/,
                loader: 'jshint-loader'
            }
        ]
        */
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    }
};