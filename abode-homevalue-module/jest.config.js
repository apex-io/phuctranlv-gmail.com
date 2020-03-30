module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./**/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['./enzyme.config.js'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\coverage\\\\'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
  },
  transformIgnorePatterns: ['./node_modules/'],
  verbose: false,
};
