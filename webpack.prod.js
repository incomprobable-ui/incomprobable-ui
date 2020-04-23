const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const exec = require('child_process').exec;

module.exports = () => {
  const platform = process.env.NODE_ENV.includes('rn') ? 'native' : 'web';
  const pathRn = `"./node_modules/styled-components"${platform === 'native' ? '/native' : ''}`;
  const externals = {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  };

  externals['styled-components'] = {
    commonjs: 'styled-components',
    commonjs2: 'styled-components',
    amd: 'styled-components',
    root: 'styled-components',
  };

  if (platform === 'native') {
    externals['react-native'] = {
      commonjs: 'react-native',
      commonjs2: 'react-native',
      amd: 'react-native',
      root: 'react-native',
    };
  } else {
    externals['react-dom'] = {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    };
  }

  return {
    mode: 'production',
    watch: true,
    entry: './src/index.tsx',
    output: {
      filename: `bundle.${platform}.js`,
      path: path.resolve(__dirname, 'dist'),
      library: 'IncomprobableUI',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: !process.env.NODE_ENV.includes('production'),
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.ts(x?)$/,
          exclude: platform === 'native' ? [] : /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        },
        {
          test: /\.js$/,
          exclude: platform === 'native' ? [] : /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader',
            options: {
              encoding: 'base64',
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'react-native': path.resolve(__dirname, './node_modules/react-native'),
        'styled-components': path.resolve(__dirname, pathRn),
      },
      extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
    },
    externals,
    plugins: [
      new webpack.EnvironmentPlugin({
        'process.env': JSON.stringify({
          PLATFORM: platform,
        }),
        PLATFORM: JSON.stringify(platform),
      }),
      new webpack.DefinePlugin({
        'process.env.PLATFORM': JSON.stringify(platform),
      }),
      new MiniCssExtractPlugin({
        filename: `bundle.${platform}.css`,
      }),
      {
        apply: (compiler) => {
          if (platform === 'native') {
            compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
              exec(
                'cp ./dist/bundle.native.js ./stories/native/storybook/stories',
                (err, stdout, stderr) => {
                  if (stdout) process.stdout.write(stdout);
                  if (stderr) process.stderr.write(stderr);
                },
              );
            });
          }
        },
      },
    ],
  };
};
