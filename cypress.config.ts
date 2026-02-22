import { defineConfig } from 'cypress';

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://localhost:4000',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  },
});
