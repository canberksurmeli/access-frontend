module: {
    rules: [
        { test: /\.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
        { test: /\.css$/, use: isDevBuild ? ['style-loader', "typings-for-css-modules-loader?namedExport&modules"] : ExtractTextPlugin.extract({ use: 'typings-for-css-modules-loader?minimize&namedExport&modules' }) },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=1000' }
    ]
}