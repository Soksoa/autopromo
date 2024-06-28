module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('nativewind/babel'),
      [
        'module-resolver',
        {
          alias: {
            // Your alias configurations
            '@/assets': './assets',
            '@/app': './app',
            '@/components': './components',
            '@/utils': './utils',
            '@/state': './state',
            '@/types': './types',
          },
        },
      ],
    ],
  };
};
