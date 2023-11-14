import {Builder,By, Capabilities, until, WebDriver,WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })
// filled all the locators here
    const hdrInput: By = By.name('hdrInput') //fill in the blank
    const mkeInput: By = By.name('mkeInput') //fill in the blank
    const oaiInput: By = By.name('oriInput') //fill in the blank
    const nameInput: By = By.name('namInput') //fill in the blank
    const clrBtn: By = By.id('clearBtn') //fill in blank 
    const submitBtn: By = By.id('saveBtn') //fill in blank
    const errorMsg: By = By.css('#validHeader') // fill in blank 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Change this")
        await driver.findElement(mkeInput).sendKeys("change this")
        await driver.findElement(oaiInput).sendKeys("change this")
        await driver.findElement(nameInput).sendKeys("change this")
        await driver.findElement(submitBtn).click()
        let errorText = await driver.findElement(errorMsg).getText()
        expect(errorText).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})