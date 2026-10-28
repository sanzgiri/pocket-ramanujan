import { expect, test } from '@playwright/test';

test('renders a discovery page with the full reading path', async ({ page }) => {
  await page.goto('/discoveries/partition-congruences/');
  await expect(page.getByRole('heading', { name: 'Partition Congruences' })).toBeVisible();
  await expect(page.locator('.math-block')).toHaveAttribute('aria-label', 'Ramanujan\'s three famous congruences');
  await expect(page.locator('#matters-title')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What is a partition?' })).toBeVisible();
  expect(await page.locator('.lesson p').count()).toBeGreaterThan(8);
  await expect(page.getByRole('heading', { name: 'Explore further' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
  await expect(page.getByRole('link', { name: /next/i })).toBeVisible();
});

test('home start-here links follow the first three entries in the canonical path', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('.start-section .discovery-card');
  await expect(links).toHaveCount(3);
  await expect(links.nth(0)).toHaveAttribute('href', '/discoveries/partition-congruences/');
  await expect(links.nth(1)).toHaveAttribute('href', '/discoveries/pi-series/');
  await expect(links.nth(2)).toHaveAttribute('href', '/discoveries/highly-composite-numbers/');
});

test('returns a not found response for an unknown discovery', async ({ request }) => {
  const response = await request.get('/discoveries/not-a-discovery/');
  expect(response.status()).toBe(404);
});
