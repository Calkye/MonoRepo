module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel', // ✅ NativeWind preset goes here
    ],
    plugins: [
      'react-native-reanimated/plugin', // ✅ Always last
    ],
  };
};