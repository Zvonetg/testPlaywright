const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');  
const DashboardPage = require('../pages/DashboardPage');  

const login = "https://syskit-point-e2e-task-2025.syskit365demo.com/#/";

test.describe('Syskit E2E Test', () => {

  test.beforeEach("Navigate to page", async ({ page, context }) => {
    await context.clearCookies();  
    await page.goto(login);
  });

  test('should Adele user try to delete Chronos Team', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.login('AdeleV@vnrqy.onmicrosoft.com', 'hXSbE79Nj8CMbVn');
    await dashboardPage.teamsAndGroupsLink.click();
    await dashboardPage.searchAndPickChronos()
    await dashboardPage.confirmDelete();
    await dashboardPage.verifyDeletionFailure();
  });
});
