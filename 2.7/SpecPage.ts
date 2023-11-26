import {Builder,By, Capabilities, until, WebDriver,WebElement } from "selenium-webdriver"; //importing selenium driver locally to this folder so that we can use the selenium keywords
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  export class SpecPage {
    //required parameters inorder to use the class outside of the page.

    driver: WebDriver; //calling driver
    url: string = "https://www.google.com/"; //set url

    //adding locators, constructor and methods

    //set locators for this test here we navigate to google, need search bar element, then result element

    searchBar: By = By.name('q'); 
    results: By = By.css('#rcnt'); 

    //this is setting the parameters in order to use them in the methods and outside of the class

    constructor(driver:WebDriver, url: string) {
        this.driver = driver; 
        this.url = url; 
    };

   // Navigate method

   async navigate() {
    await this.driver.get(this.url); 
    await this.driver.wait(until.elementLocated(this.searchBar)); 
}; 

// enteting in the search bar

async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy))
  return this.driver.findElement(elementBy).sendKeys(keys)
}



async getText(elementBy: By) {
  await this.driver.wait(until.elementLocated(elementBy))
  return (await this.driver.findElement(elementBy)).getText()
}

// searching for the keyword purple
async doSearch(text: string) {
  return this.sendKeys(this.searchBar, `${text}\n`)
}
async getResults() {
  return this.getText(this.results)
}




  }
