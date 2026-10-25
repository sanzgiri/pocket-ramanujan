import { expect, test } from '@playwright/test';

test('browse exposes crawlable discovery links and filters', async ({ page }) => {
  await page.goto('/discoveries/');
  await expect(page.getByRole('heading', { name: 'Browse discoveries' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Partition Congruences/ })).toBeVisible();
  await expect(page.getByLabel('Filter by topic')).toBeVisible();
  await expect(page.getByLabel('Filter by difficulty')).toBeVisible();
});

test('search finds a discovery by concept', async ({ page }) => {
  await page.goto('/search/');
  await expect(page.getByRole('heading', { name: 'Search the collection' })).toBeVisible();
  await page.getByRole('searchbox').fill('partition');
  await expect(page.getByRole('link', { name: /Partition Congruences/ })).toBeVisible();
});

test('not found page offers a way home', async ({ page }) => {
  await page.goto('/not-a-real-page/');
  await expect(page.getByRole('heading', { name: /vanished|not found/i })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Go home' })).toBeVisible();
});
