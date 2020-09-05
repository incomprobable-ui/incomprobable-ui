module.exports = (api) => {
  const env = api.env();

  const platform = env.includes('rn') ? 'native' : 'web';
  const isProduction = env.includes('production');

  const nativePresets = ['module:metro-react-native-babel-preset'];
  const webPresets = ['@babel/preset-env', '@babel/preset-react'];

  return {
    presets: platform === 'native' ? nativePresets : webPresets,
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
        },
      ],
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-optional-chaining',
    ],
  };
};
