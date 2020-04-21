const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const exec = require("child_process").exec;

module.exports = () => {
  const platform = process.env.NODE_ENV.includes("rn") ? "native" : "web";
  const externals = {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
  };

  if (platform === "native") {
    externals["react-native"] = {
      commonjs: "react-native",
      commonjs2: "react-native",
      amd: "react-native",
      root: "react-native",
    };
  } else {
    externals["react-dom"] = {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    };
  }

  return {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
      filename: `bundle.${platform}.js`,
      path: path.resolve(__dirname, "dist"),
      library: "IncomprobableUI",
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !process.env.NODE_ENV.includes("production"),
              },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: !process.env.NODE_ENV.includes("production"),
              },
            },
          ],
        },
        {
          test: /\.tsx$/,
          exclude: platform === "native" ? [] : /node_modules/,
          use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
        },
        {
          test: /\.js$/,
          exclude: platform === "native" ? [] : /node_modules/,
          use: [{ loader: "babel-loader" }],
        },
        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
            options: {
              encoding: "base64",
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        react: path.resolve(__dirname, "./node_modules/react"),
        "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
        "react-native": path.resolve(__dirname, "./node_modules/react-native"),
      },
      extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
    },
    externals,
    plugins: [
      new webpack.DefinePlugin({
        platform: JSON.stringify(platform),
      }),
      new MiniCssExtractPlugin({
        filename: `bundle.${platform}.css`,
      }),
      {
        apply: (compiler) => {
          // if (platform === "native") {
          //   compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          //     exec(
          //       "cp ./dist/bundle.native.js ../native/src",
          //       (err, stdout, stderr) => {
          //         if (stdout) process.stdout.write(stdout);
          //         if (stderr) process.stderr.write(stderr);
          //       }
          //     );
          //   });
          // } else if (platform === "web") {
          //   compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          //     exec(
          //       "cp ./dist/bundle.web.js ../web/src && cp ./dist/bundle.web.css ../web/src",
          //       (err, stdout, stderr) => {
          //         if (stdout) process.stdout.write(stdout);
          //         if (stderr) process.stderr.write(stderr);
          //       }
          //     );
          //   });
          // }
        },
      },
    ],
  };
};
