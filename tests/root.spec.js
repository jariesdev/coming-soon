import { test, expect } from '@playwright/test';

test.describe('Root Page Layout', () => {
	test('Metadata and SEO', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/Coming Soon/i);
	});

	test('Desktop Layout Split', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto('/');

		const contentSide = page.locator('section.coming-soon');
		const visualSide = page.locator('.rotating-logo');

		// Ensure both sides are visible and side-by-side
		await expect(contentSide).toBeVisible();
		await expect(visualSide).toBeVisible();

		const contentBox = await contentSide.boundingBox();
		const visualBox = await visualSide.boundingBox();

		// Verify horizontal alignment (Desktop)
		expect(contentBox.x).toBeLessThan(visualBox.x);
	});

	test('Mobile Responsiveness', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
		await page.goto('/');

		const contentSide = page.locator('section.coming-soon');
		const visualSide = page.locator('.rotating-logo');

		const contentBox = await contentSide.boundingBox();
		const visualBox = await visualSide.boundingBox();

		// Verify vertical stacking (Mobile)
		expect(contentBox.y).toBeLessThan(visualBox.y);

		// Check margin between form and visual side (your specific requirement)
		// The form wrapper has mb-10 on mobile
		const formWrapper = page.locator('.w-full.max-w-lg.mb-10');
		await expect(formWrapper).toHaveClass(/mb-10/);
	});
});
