const { test, expect } = require('@playwright/test');
const { fazerLogin } = require('./helpers/login');

test('adiciona um produto ao carrinho', async ({ page }) => {
  await fazerLogin(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page).toHaveURL(/\/cart\.html/);
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('remove um produto do carrinho', async ({ page }) => {
  await fazerLogin(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.getByText('Sauce Labs Backpack')).toHaveCount(0);
});
