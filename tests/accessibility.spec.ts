import { expect, test } from '@playwright/test';

test('discovery pages expose metadata, landmarks, and accessible math', async ({ page }) => {
  await page.goto('/discoveries/partition-congruences/');
  await expect(page.locator('main')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /pocket-ramanujan/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /divisibility/);
  await expect(page.locator('.math-block')).toHaveAttribute('aria-label', /congruences/);
  await expect(page.locator('.math-block .katex-mathml')).toHaveCount(1);
});

test('site publishes crawl metadata', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain('Sitemap:');
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain('/discoveries/partition-congruences/');
});
