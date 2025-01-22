class DashboardPage {

    constructor(page) {
      this.page = page;
    }
  
    get teamsAndGroupsLink() {
      return this.page.locator('a:has-text("Teams & Groups")');
    }

    get confirmationTextArea() {
      return this.page.locator('textarea');
    }

    get saveButton() {
      return this.page.locator('button:has-text("Delete")');
    }


    async searchAndPickChronos() {
        await this.page.getByLabel('Search in the data grid').click();
        await this.page.getByLabel('Search in the data grid').fill('Chronos');
        await this.page.getByRole('link', { name: 'Chronos', exact: true }).click();
        await this.page.getByTestId('report-actions-container').getByText('Delete').click();
    }

    
    async confirmDelete() {
      await this.page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
      await this.page.locator('div:nth-child(2) > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').fill('DELETE');
      await this.confirmationTextArea.click();
      await this.confirmationTextArea.fill('DELETE');
      await this.saveButton.click();
    }
  
    async verifyDeletionFailure() {
     await this.page.locator('text=Adele Vance failed to delete').isVisible();
      // await expect(this.page.locator('.message')).toContainText('Action completed with errors.'); check this!
    }
  }
  
  module.exports = DashboardPage;
  