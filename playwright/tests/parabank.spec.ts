import { test, Page, expect } from '@playwright/test'


/**
 * My practice
 */
test('Pagabank Locator Actions', async ({ page }) => {

   await page.goto("https://parabank.parasoft.com/")
   await page.getByAltText('ParaBank').isVisible()
   const count: number = await page.locator("ul[class='leftmenu']>li").count()
   for (let i = 0; i < count; i++) {

      let menuArray: string[] = []
      let menu = await page.locator("ul[class='leftmenu']>li").nth(i).innerText()
      menuArray.push(menu ?? "")
      console.log(menuArray)

   }

   console.log(await page.locator('#headerPanel').getByRole('link', { name: 'About Us' }).innerText())
   //await page.pause()
   console.log(await page.getByRole('img', { name: 'ParaBank' }).getAttribute('title'))
   //await page.pause()

   console.log(await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).innerText())
   await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).click()
   const seviceLocator = page.getByRole('heading', { name: "Available Bookstore SOAP services:" })
   await page.waitForTimeout(3000)
   let isvisible = await page.getByRole('heading', { name: "Available Bookstore SOAP services:" }).isVisible()
   if (isvisible) {
      console.log("yes Visible")
   }
   await page.waitForTimeout(3000)
   interface Table {
      Method: string,
      Parameter: string,
      Description: string
   }

   let TableData: Table[] = []
   await page.waitForTimeout(3000)
   let tableSelector = page.locator('//span[text()="Bookstore services:"]/following::table[1]/tbody/tr')
   //await tableSelector.scrollIntoViewIfNeeded()
   let rowCount = await tableSelector.count()
   console.log(rowCount)

   for (let i = 0; i < rowCount; i++) {
      let rowdata = tableSelector.nth(i).locator('td')

      let objecttable: Table = {

         Method: await rowdata.nth(0).innerText() ?? "",
         Parameter: await rowdata.nth(1).innerText() ?? "",
         Description: await rowdata.nth(2).innerText() ?? ""
      }

      TableData.push(objecttable ?? "")

   }
   console.log(TableData)

})
/**
 * Assignment ParaBank
 */

