import { test, expect } from '@playwright/test';

test.describe('Syskit E2E Test with Cookie Clearing', () => {

  test.beforeEach(async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('https://syskit-point-e2e-task-2025.syskit365demo.com/#/');
  });

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('AdeleV@vnrqy.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('hXSbE79Nj8CMbVn');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://syskit-point-e2e-task-2025.syskit365demo.com/#/b31634b7-e85a-463d-bbda-500023a99bd0/dashboard/main');
  await page.getByRole('link', { name: 'Teams & Groups' }).click();
  await page.getByLabel('Search in the data grid').click();
  await page.getByLabel('Search in the data grid').fill('Chronos');
  await page.getByRole('row', { name: 'Select row Microsoft Teams Chronos chronos­@vnrqy­.onmicrosoft­.com Microsoft' }).getByRole('checkbox').click();
  await page.getByTestId('report-actions-container').getByText('Delete').click();
  await page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
  await page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').press('CapsLock');
  await page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').fill('DELETE');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('hey');
  await page.getByTestId('generic-dialog-save').click();
  await page.getByRole('link', { name: 'Check details.' }).click();
  await expect(page.getByText('Adele Vance failed to delete')).toBeVisible();
  });
});