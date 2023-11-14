//first three steps

import {Builder,By, Capabilities, until, WebDriver,WebElement } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

// done first part


  class employeePage {
      driver: WebDriver; //calling driver
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"; //set url


        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST

        // locators
        header: By = By.css('.titleText'); 
        addEmployee: By = By.name('addEmployee'); 
        newEmployee: By = By.xpath('(//li[@class="listText"])[11]'); 
        nameInput: By = By.name('nameEntry'); 
        phoneInput: By = By.name('phoneEntry'); 
        titleInput: By = By.name('titleEntry'); 
        saveBtn: By = By.id('saveBtn'); 

        //constructor
           constructor (driver:WebDriver){
            this.driver = driver;
        }  


       // methods

       async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
    }; 
    async getElement(elementBy: By):Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    };
    async sendKeys(elementBy:By, keys:any) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).sendKeys(keys); 
    }; 
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click();
    }; 
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; 

  }

  const emPage = new employeePage(driver);

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      });

      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Change this")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("Change this")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Change this")
  })

})
