const path = require('path');

module.exports = {
  stories: ['../../stories/web/*.stories.[tj]s'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    });

    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });

    console.log(path.resolve(__dirname, './../../react-native-svg.js'));
    config.resolve.alias['react-native-svg'] = path.resolve(
      __dirname,
      './../../react-native-svg.js',
    );

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
