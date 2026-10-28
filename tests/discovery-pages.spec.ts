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

test('renders a batch-one lesson with described KaTeX MathML and ordered navigation', async ({ page }) => {
  await page.goto('/discoveries/hardy-ramanujan-circle-method/');
  await expect(page.getByRole('heading', { name: 'Hardy–Ramanujan Circle Method' })).toBeVisible();
  const formula = page.locator('.math-block').first();
  await expect(formula).toHaveAttribute('aria-label', 'Hardy–Ramanujan partition asymptotic');
  await expect(formula.locator('figcaption')).toContainText('ratio');
  await expect(formula.locator('.katex-mathml math')).toHaveCount(1);
  await expect(page.getByRole('link', { name: /previous/i })).toHaveAttribute('href', '/discoveries/highly-composite-numbers/');
  await expect(page.getByRole('link', { name: /next/i })).toHaveAttribute('href', '/discoveries/rogers-ramanujan-identities/');
});

test('renders a batch-two modular equation with MathML and neighbor links', async ({ page }) => {
  await page.goto('/discoveries/modular-equations/');
  await expect(page.getByRole('heading', { name: "Ramanujan's Modular Equations" })).toBeVisible();
  const formula = page.locator('.math-block').first();
  await expect(formula).toHaveAttribute('aria-label', 'Degree-two modular equation for the lambda function');
  await expect(formula.locator('.katex-mathml math')).toHaveCount(1);
  await expect(page.getByRole('link', { name: /previous/i })).toHaveAttribute('href', '/discoveries/continued-fractions/');
  await expect(page.getByRole('link', { name: /next/i })).toHaveAttribute('href', '/discoveries/mock-theta-functions/');
});

test('batch-three and batch-four formulas render with descriptions and MathML', async ({ page }) => {
  for (const slug of [
    'gamma-function-approximations',
    'ramanujan-master-theorem',
    'ramanujan-summation',
    'further-pi-series',
  ]) {
    await page.goto(`/discoveries/${slug}/`);
    const formula = page.locator('.math-block').first();
    await expect(formula).toHaveAttribute('aria-label', /.+/);
    await expect(formula.locator('.katex-mathml math')).toHaveCount(1);
  }
});

test('all current lessons render the plain-language equation walkthrough', async ({ page }) => {
  const slugs = [
    'partition-congruences',
    'pi-series',
    'highly-composite-numbers',
    'hardy-ramanujan-circle-method',
    'rogers-ramanujan-identities',
    'ramanujan-tau-function',
    'continued-fractions',
    'modular-equations',
    'mock-theta-functions',
    'gamma-function-approximations',
    'ramanujan-master-theorem',
    'ramanujan-summation',
    'further-pi-series',
  ];

  for (const slug of slugs) {
    await page.goto(`/discoveries/${slug}/`);
    await expect(page.getByRole('heading', { name: 'The main equation in plain language' })).toBeVisible();
  }
});

test('representative batch formulas fit mobile viewports without page overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const slug of [
    'hardy-ramanujan-circle-method',
    'modular-equations',
    'gamma-function-approximations',
    'ramanujan-summation',
  ]) {
    await page.goto(`/discoveries/${slug}/`);
    const pageOverflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(pageOverflows, `${slug} should not overflow the viewport`).toBe(false);
    const formula = page.locator('.math-block').first();
    await expect(formula).toHaveCSS('overflow-x', 'auto');
    await expect(formula.locator('.katex-mathml math')).toHaveCount(1);
  }
});

test('makes the Ramanujan-summation caution visible to readers', async ({ page }) => {
  await page.goto('/discoveries/ramanujan-summation/');
  await expect(page.getByRole('heading', { name: 'Ordinary convergence versus Ramanujan summation' })).toBeVisible();
  await expect(page.getByText(/regularized value, not an ordinary sum/i)).toBeVisible();
});

test('returns a not found response for an unknown discovery', async ({ request }) => {
  const response = await request.get('/discoveries/not-a-discovery/');
  expect(response.status()).toBe(404);
});
