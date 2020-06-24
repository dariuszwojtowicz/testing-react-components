module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/tests/**/*.spec.*'],
  transform: {
    '\\.(ts|tsx|js|jsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/setup/fileStub.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  coverageReporters: ['json', 'lcov', 'html', 'text'],
  coverageDirectory: '<rootDir>/build/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 70,
      statements: 70
    }
  },
  setupFiles: [
    '<rootDir>/test/setup.js'
  ]
};
