// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

module.exports = {
  nodeResolve: true,
  files: 'test/**/*.test.js',
  plugins: [
    require('@snowpack/web-test-runner-plugin')()
  ],
};
