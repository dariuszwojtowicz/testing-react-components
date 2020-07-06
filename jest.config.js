module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  testMatch: ['**/tests/**/*.spec.*'],
  transform: { '\\.(ts|tsx|js|jsx)$': 'ts-jest' },
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  setupFiles: [ '<rootDir>/test/setup.js' ]
};
