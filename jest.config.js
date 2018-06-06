module.exports = {
  cacheDirectory: './test/tmp',
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'json'],
  coveragePathIgnorePatterns: ['node_modules', 'dist', 'test'],
  testMatch: ['./test/**/**/*.spec.js', '**/?(*.)(spec|test).js?(x)'],
  preset: 'jest-puppeteer',
  globalSetup: './jest/setup.js',
  globalTeardown: './jest/teardown.js',
  testEnvironment: './jest/puppeteer_environment.js'
}
