const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({
      preset: 'default',
      plugins: [autoprefixer],
    }),
  ],
};
