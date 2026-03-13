import { defineConfig } from '@playwright/test';

export default defineConfig({
	use: {
		// Use the environment variable if it exists, otherwise localhost
		baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:5173'
	}
});
