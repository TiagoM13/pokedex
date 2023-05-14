/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/jest/__mocks__/setupMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@pages': '<rootDir>/src/pages/index.ts',
    '^@components': '<rootDir>/src/components/index.ts',
    '^@interfaces': '<rootDir>/src/interfaces/index.ts',
    '^@hooks': '<rootDir>/src/hooks/index.ts',
    '^@utils': '<rootDir>/src/utils/index.ts',
    '^@lib': '<rootDir>/src/lib/index.ts',
    '^@routes': '<rootDir>/src/routes/index.ts',
    '^@theme': '<rootDir>/src/theme/index.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
