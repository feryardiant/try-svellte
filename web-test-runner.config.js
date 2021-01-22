// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

module.exports = {
  files: 'tests/**/*.@(spec|test).js',
  plugins: [
    require('@snowpack/web-test-runner-plugin')()
  ],
  coverageConfig: {
    reportDir: 'tests/coverage'
  }
};
