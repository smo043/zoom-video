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
  globals: {
    'ts-jest': {
      extends: './babel.config.js'
    }
  },
  modulePathIgnorePatterns: ['dist'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  testMatch: ['**/__tests__/*.+(ts|tsx|js|jsx)', '**/*.test.+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>jest/setupTests.ts']
};
