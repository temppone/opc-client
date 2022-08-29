module.exports = {
  testMatch: ["<rootDir>/src/**/test.ts", "<rootDir>/src/**/test.tsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  testEnvironment: "jsdom",
};
