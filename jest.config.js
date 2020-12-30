module.exports = {
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js', 'json', 'node'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  modulePathIgnorePatterns: ['dist'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  testMatch: ['**/__tests__/*.+(ts|tsx|js|jsx)', '**/*.test.+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  setupFilesAfterEnv: ['<rootDir>jest/setupTests.ts']
};
