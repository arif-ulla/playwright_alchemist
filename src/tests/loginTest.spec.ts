// Test script using the Page Object Model
import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { encrypt, decrypt } from "../utils/CryptojsUtil";
import { encryptEnvFile, decryptEnvFile } from "../utils/EncryptEnvFile";


test("test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
});

test.skip("Sample env test", async ({ page }) => {
    // const plainText = "Hello, World!";
    // const encryptedText = encrypt(plainText);
    // console.log('SALT:', process.env.SALT);
    // console.log('Encrypted Text:', encryptedText);

    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted Text:', decryptedText);

    encryptEnvFile();

    // console.log(decrypt("U2FsdGVkX1+nL2Rt5Vrt/SiF6nEvDTEPdwiXDnU9MBmKW86paJaSG3GkhMOLIpPd"))


});