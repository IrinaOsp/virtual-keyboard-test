module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  overrides: [
    {
      files: ['src/modules/*.js'],
      rules: {
        'import/extensions': [
          'error',
          'always',
          {
            ignorePackages: true,
          },
        ],
      },
    },
  ],
};
