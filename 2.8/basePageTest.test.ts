import {Google} from './googleWBP'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()


test ('searching ', async()=>{
    await google.navigate()
    await google.search('Hershey\n')
    let resultText = await google.getResults()
    expect (resultText).toContain('Hershey')



    await fs.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    )
   fs.writeFile(`${__dirname}/test.txt`, resultText, (e) => {
       if (e) console.error(e)
       else console.log('save Succesful')
   })

})
afterAll(async () => {
   await google.driver.quit()
})