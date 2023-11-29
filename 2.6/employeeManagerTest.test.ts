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
    
  }

  const emPage = new employeePage(driver);

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();// before each test, navigate to URL
      });

      afterAll(async () => {
          await driver.quit() // sfter each test , close the browser
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
