const { test, expect } = require('@playwright/test');
const { fazerLogin } = require('./helpers/login');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('faz login com sucesso', async ({ page }) => {
  await fazerLogin(page);

  await expect(page).toHaveURL(/\/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('mostra erro ao informar senha incorreta', async ({ page }) => {
  await fazerLogin(page, 'standard_user', 'senha_errada');

  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
});

test('mostra erro ao informar usuário inexistente', async ({ page }) => {
  await fazerLogin(page, 'usuario_inexistente', 'secret_sauce');

  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
});

test('faz logout com sucesso', async ({ page }) => {
  await fazerLogin(page);

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page).toHaveURL(/saucedemo\.com\//);
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
