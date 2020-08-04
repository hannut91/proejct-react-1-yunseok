module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    'next/babel',
    '@emotion/babel-preset-css-prop',
  ],
};
