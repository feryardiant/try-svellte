/** @type { import('snowpack').SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
    tests: {url: '/', resolve: false}
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv'
  ]
};
