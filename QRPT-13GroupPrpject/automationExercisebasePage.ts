import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class automationPageClass extends BasePage {
    names: string[] = [];
    searchBar: By = By.id('search_product'); 
    icon: By = By.id('submit_search')
    results: By = By.css('.features_items'); 
    plusIcon: By = By.xpath('(//i[@class="fa fa-plus"])[1]');
    categoryResults: By = By.xpath(' (//div[@class="panel-body"])[1]');
    subInput: By = By.id('susbscribe_email')
    subBtn: By = By.id('subscribe')
    subText:By = By.id('success-subscribe')





    constructor(){
        super({url: 'https://automationexercise.com/products'}); 
    }; 
    async search(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`);
    }; 
    async getResults() {
        return this.getText(this.results)
    }; 
    async getResultsCategory() {
       let names= await this.getText(this.categoryResults);
       return names;
    }; 

};
