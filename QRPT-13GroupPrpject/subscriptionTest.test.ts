import {automationPageClass} from './automationExercisebasePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const automationPage = new automationPageClass()


test ('subscription ', async()=>{
    await automationPage.navigate()
    await automationPage.setInput(automationPage.subInput,'test@gmail.com')
    await automationPage.click(automationPage.subBtn) // \n is used to hit enter after the search item is typed
    let resultText = await automationPage.getText(automationPage.subText)
    expect (resultText).toBe('You have been successfully subscribed!')



    

})
afterAll(async () => {
   await automationPage.driver.quit()
})