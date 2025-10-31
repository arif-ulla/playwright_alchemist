import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {
    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password";
    private readonly loginButtonSelector = "#Login";

    constructor(private readonly page: Page) {

    }

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto("/");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInputSelector).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton() {
        await this.page
            .locator(this.loginButtonSelector)
            .click()
            .catch((error) => {
                console.error(`Error clicking login button: ${error}`);
                throw error;  // rethrow the errorr if needed
            });

        const homePage = new HomePage(this.page);
        return homePage;
    }
}