module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Your plugins go here
      'react-native-iconify/plugin',
      {
        icons: [
          'bi:2-circle',
          'bi:1-circle',
          // Add other icons you need
        ],
      },
    ],
  };
};