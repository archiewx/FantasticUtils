module.exports = {
  cacheDirectory: './test/tmp',
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules', 'dist', 'test'],
  testMatch: ['./test/jest/**/*.spec.js', '**/?(*.)(spec|test).js?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
