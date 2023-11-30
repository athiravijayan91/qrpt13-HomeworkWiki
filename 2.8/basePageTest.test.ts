import {Google} from './googleWBP'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')// calling library file system
const google = new Google()


test ('searching ', async()=>{
    await google.navigate()
    await google.search('Hersheys\n')  // \n is used to hit enter after the search item is typed
    let resultText = await google.getResults()
    expect (resultText).toContain('Hersheys')



    await fs.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64",   //used .driver here since it is a built in method in selenium
    (e) => {
        if (e) console.error(e)
        else console.log('Saved Succesfully')
    }
    )
   fs.writeFile(`${__dirname}/test.txt`, resultText, (e) => {
       if (e) console.error(e)
       else console.log('saved Succesfully')
   })

})
afterAll(async () => {
   await google.driver.quit()
})