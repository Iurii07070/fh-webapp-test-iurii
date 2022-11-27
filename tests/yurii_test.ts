Feature('Filter results');

const wait = 30;
const email ="***";
const password = "***";

Scenario('login LIS', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.fillField("//input[@name='login']", email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.waitForVisible("//input[@name='password']", wait);
I.fillField("//input[@name='password']", password);
I.click("//button[contains(text(),'Continue')]");
I.waitForText("Results", wait);
});

Scenario('Apply filter', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.fillField("//input[@name='login']", email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.waitForVisible("//input[@name='password']", wait);
I.fillField("//input[@name='password']", password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", wait);
I.click("//a[@href='/results']");
I.waitForText("Results", wait);
I.click("//button[contains(text(),'Filters')]");
I.waitForVisible("//span[@id='status-label']", wait);
I.fillField("//input[@id='status-input']",'Final');
I.click("//span[contains(text(),'Final')]"), wait;
I.waitForVisible("//div[contains(text(),'Status: Final')]", wait);
});

Scenario('Search and clear', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.fillField("//input[@name='login']", email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.waitForVisible("//input[@name='password']", wait);
I.fillField("//input[@name='password']", password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", wait);
I.click("//a[@href='/results']");
I.waitForText("Results", wait);
I.click("//header/div/div[1]/div/form");
I.fillField("//input[@placeholder='Search for Orders']", 'no_search_results_text');
I.pressKey('Enter');
I.waitForText("No results", wait);
I.click("//header//*[(@style='cursor: pointer;')and not(contains(@class, 'active'))]/div");
I.waitNumberOfVisibleElements("//div[@tabindex='-1']",25, wait);
});

Scenario('Check profile', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.fillField("//input[@name='login']", email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.waitForVisible("//input[@name='password']", wait);
I.fillField("//input[@name='password']", password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", wait);
I.click("//a[@href='/results']");
I.waitForText("Results", wait);
I.click("//div[@data-tid='userHeaderMenu']");
I.click("//span[contains(text(),'Profile')]");
I.waitForVisible("//span[contains(text(),'Profile')]", wait); //title
I.waitForVisible("//div[contains(text(),'Yuriy Presnov')]", wait);
I.waitForVisible("//div[contains(text(),'yuriy.presnov@flowhealth.com')]", wait);
I.waitForVisible("//div/span[contains(text(),'+1 202 888 9999')]", wait);
});

Scenario('Check links', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.fillField("//input[@name='login']", email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", wait);
I.waitForVisible("//input[@name='password']", wait);
I.fillField("//input[@name='password']", password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", wait);
I.click("//a[@href='/results']");
I.waitForText("Results", wait);
I.click("//div[@data-tid='userHeaderMenu']");
I.click("//span[contains(text(),'Legal')]");
I.waitForVisible("//div/div/div[contains(text(),'Privacy Policy')]", wait);
I.waitForClickable("//div[normalize-space()='Privacy Policy']", wait);
I.waitForClickable("//div[normalize-space()='Terms of Service']", wait);
I.waitForClickable("//div[normalize-space()='Notice of Privacy Practices']", wait);
I.waitForClickable("//div[normalize-space()='Healthcare Provider User Agreement']", wait);
I.waitForClickable("//div[normalize-space()='Electronic Signature Terms']", wait);
I.waitForClickable("//div[normalize-space()='SMS Terms of Service']", wait);
});