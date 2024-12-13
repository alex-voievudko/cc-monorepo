import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|less|scss|sass)$"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
