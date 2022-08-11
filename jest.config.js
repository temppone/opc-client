module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  testEnvironment: "jsdom",
};
