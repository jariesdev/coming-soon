import { test, expect } from '@playwright/test';

test.describe('Coming Soon Page Components', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('Subscription Form - Validation and Success', async ({ page }) => {
		const emailInput = page.locator('input[type="email"]');
		const submitBtn = page.getByRole('button', { name: /notify me/i });

		// 1. Test empty submission
		await submitBtn.click();
		await expect(page.getByText('Email is required')).toBeVisible();

		// 2. Test invalid email
		await emailInput.fill('not-an-email@test');
		await submitBtn.click();
		await expect(page.getByText('Please enter a valid email address')).toBeVisible();

		// // 3. Test successful submission
		await emailInput.fill('hello@example.com');
		await submitBtn.click();

		// // Check for success message and that form is hidden
		await expect(page.getByText("You're on the list!")).toBeVisible();
		await expect(emailInput).not.toBeVisible();
	});

	test('Visual Side - Logo and Animation', async ({ page }) => {
		const logo = page.locator('img[alt="Logo"]');
		// const abstractShape = page.locator('div[class^="animate-"]');

		// Check if the logo imported from $lib/assets is rendering
		await expect(logo).toBeVisible();
		await expect(logo).toHaveAttribute('src', /favicon\.png/);

		// Ensure the rotating background exists
		// await expect(abstractShape).toBeVisible();
	});
});
