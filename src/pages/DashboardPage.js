class DashboardPage {
    constructor(page) {
      this.page = page;
    }
  
    get teamsAndGroupsLink() {
      return this.page.locator('a:has-text("Teams & Groups")');
    }
  
    get searchDataGridField() {
      return this.page.locator('input[placeholder="Search..."]');
    }

    get rowCheckbox() {
      return this.page.locator('span:has-text("Chronos")');
    }
  
    get deleteButton() {
      return this.page.locator('button:has-text("Delete")');
    }
  
    get confirmationTextArea() {
      return this.page.locator('textarea');
    }

    get confirmDelete() {
        return this.page.locator('div:has-text("Type DELETE here")');
      }
  
    get saveButton() {
      return this.page.locator('button:has-text("Delete")');
    }

    async clickSearch() {
        await this.page.getByLabel('Search in the data grid').click();
        await this.page.getByLabel('Search in the data grid').fill('Chronos');
      }

      async clickChronos() {
        await this.page.getByRole('link', { name: 'Chronos', exact: true }).click();
        await this.page.getByTestId('report-actions-container').getByText('Delete').click();
        await this.page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
        await this.page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').fill('DELETE');
      }

    
    async searchAndDelete() {
      await this.confirmationTextArea.fill('DELETE');
      await this.saveButton.click();
    }
  
    async verifyDeletionFailure() {
     await this.page.locator('text=Adele Vance failed to delete').isVisible();
      // await expect(this.page.locator('.message')).toContainText('Action completed with errors.'); check this!
    }
  }
  
  module.exports = DashboardPage;
  