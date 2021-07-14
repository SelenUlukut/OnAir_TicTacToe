module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
            '@assets': './src/assets',
            '@constants': './src/constants',
            '@screens': './src/screens',
            '@reducers': './src/reducers',
            '@actions': './src/actions',
            '@customTypes': './src/customTypes',
            '@utils': './src/utils',
            '@services': './src/services',
            '@navigations': './src/navigations',
            '~': './src',
          },
        },
      ],
    ],
  };
};
