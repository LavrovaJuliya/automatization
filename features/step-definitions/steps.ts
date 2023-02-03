import { Given, When, Then} from "@wdio/cucumber-framework";

//import LoginPage from '../pageobjects/login.page';
//import SecurePage from '../pageobjects/secure.page';

//const pages = {
//login: LoginPage
//}

//Given(/^I am on the (\w+) page$/, async (page) => {
//npx await pages[page].open()
//});

//When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//  await LoginPage.login(username, password)
//});

//Then(/^I should see a flash message saying (.*)$/, async (message) => {
//  await expect(SecurePage.flashAlert).toBeExisting();
//await expect(SecurePage.flashAlert).toHaveTextContaining(message);
//});
Given(
  /^I open the browser and load the url(.+)$/,
  async function (homepageurl) {
    await browser.url(homepageurl);
    await browser.maximizeWindow();
  }
);

Then(/^I should see a header with text (.+)$/, async function (headertext) {
  const header = await $("span.login-title");
 expect(await header.getText())
  .toEqual(headertext);
});
When(/^I click on submit button$/, async function () {
const btn = await $("button.sign-in-btn");
btn.click();
console.log(await browser.getUrl()+ "=====");

});