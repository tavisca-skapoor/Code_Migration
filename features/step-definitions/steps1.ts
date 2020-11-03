import BasePage from '../pages/basePage';
import { Given, When, Then } from 'cucumber';
import { assert } from 'console';

Given(/^I'm on the SSO Simulator Page$/, function(){
    browser.url("http://cltsenvironments.loyaltytravelservices.com/SSOSimulator/");
});

When(/^I launch base Site$/, function(){
    browser.pause(3000);
    BasePage.EnvironmentMenu.waitForExist();
    BasePage.EnvironmentMenu.click();
    BasePage.Environment.click();
    BasePage.ClientMenu.waitForExist();
    BasePage.ClientMenu.click();
    BasePage.Client.click();
    BasePage.ProgramMenu.waitForExist();
    BasePage.ProgramMenu.click();
    BasePage.ProgramId.click();
    BasePage.SiteMenu.waitForExist();
    BasePage.SiteMenu.click();
    BasePage.Site.click();
    BasePage.CultureMenu.waitForExist();
    BasePage.CultureMenu.click();
    BasePage.Culture.click();
    BasePage.PointBalance.click();
    BasePage.fillPointsBalance();
    BasePage.SubmitButton.click();
});

Then(/^I shall be redirected to Search Page$/, function(){
    BasePage.FlightsTab.waitForExist();
    assert(BasePage.PageTitle === 'Home');
});
