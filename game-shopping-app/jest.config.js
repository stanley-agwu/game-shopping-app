module.exports = {
  preset: 'ts-jest',
  bail: 1,
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/setupTest.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
  moduleDirectories: ['node_modules', 'test', 'src'],
  collectCoverage: true,
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['node_modules', 'index.tsx', '<rootDir>/src/main.tsx'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
