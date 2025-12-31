const { test, expect } = require('@playwright/test');
const { fazerLogin } = require('./helpers/login');

test('realiza checkout com sucesso', async ({ page }) => {
  await fazerLogin(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Camila');
  await page.locator('[data-test="lastName"]').fill('Leite');
  await page.locator('[data-test="postalCode"]').fill('01000-000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await expect(page).toHaveURL(/\/checkout-complete\.html/);
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
