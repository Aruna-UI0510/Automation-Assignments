import {test,Page,expect} from '@playwright/test'


   /*1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
   2.verify application logo is displayed
   3.Verify application caption displayed as "Experience the difference"
   4.Enter invalid username
   5.Enter empty Password
   6.Click on login button
   7.Verify the error message "Please enter a username and password."
   8.Click on admin page link
   9.select the option "soap" from dba mode radio button
   10.Scroll to element dropdown
   11.Select the option web service from the dropdown
   12.click on submit button
   13.verify submission is successful by validating success message
   14.Click on services page link
   15.wait for service page
   16.Scroll down till bookstore services table
   17.get total rows of books store services table
   18.get total columns of books store services table
   19.Print table data (row wise and column wise data)*/

test('Assignment', async ({ page }) => {

   await page.goto('https://parabank.parasoft.com')

   // Locate a element , validate visiblity then compare text visible
   const logo = page.getByAltText('ParaBank')
   await expect(logo).toBeVisible()
   const imgsrc = await logo.getAttribute('src')
   expect(imgsrc).toEqual('images/logo.gif')

   // Locate the Text elemet and checks the visibility and comapre the text
   const appTitle = page.locator('p.caption')
   await expect(appTitle).toBeVisible()
   const actualText = await appTitle.innerText()
   expect(actualText).toEqual('Experience the difference')

   //locate username input and enter a invalid username
   const userinput = page.locator('//input[@name="username"]')
   await userinput.fill('Abc')

   //locate password input

   const passwordinput = page.locator('//input[@name="password"]')

   //locate the login button and click
   const loginbtn = page.locator('//input[@value="Log In"]')
   await loginbtn.click()

   //Locate the error message

   await page.getByRole('heading', { name: 'Error!' }).isVisible()
   const errormsg = await page.locator('p.error').textContent()
   expect(errormsg).toEqual('Please enter a username and password.')

   //Click on admin page link
   //select the option "soap" from dba mode radio button

   await page.locator('.leftmenu').getByRole('link', { name: 'Admin Page' }).click()
   await page.locator('//input[@type="radio" and  @value="soap"]').check()
   
   const loandropdown = page.locator('//h3[contains(text(),"Application")]/following-sibling::table/tbody/tr/td/select[@id="loanProvider"]')
   await loandropdown.scrollIntoViewIfNeeded()
   await loandropdown.selectOption({ label: 'Local' })

   await page.getByRole('button', { name: 'SUBMIT' }).click()

   //validate success message
   const msg = page.locator('//p/b[text()="Settings saved successfully."]')
   await msg.isVisible()
   expect(msg).toHaveText('Settings saved successfully.')


   await page.locator('.leftmenu').getByRole('link', { name: 'Services' }).click()
   await page.waitForLoadState('domcontentloaded')

   const bookTable = page.locator('//span[text()="Bookstore services:"]/following::table').first()
   const bookTablerow = bookTable.locator('tbody tr')
   const bookRowCount = await bookTablerow.count()

   console.log("Table Rows count with Headings:" + `${bookRowCount}`)



   // to define the template for object and storing each row as object into array
   interface Table {
      Method: string,
      Parameter: string,
      Description: string
   }

   // To print the book table data in row 
   const bookdata: Table[] = []

   for (let i = 0; i < bookRowCount; i++) {

      const rowData = bookTablerow.nth(i).locator('td')

      let obj: Table = {
         Method: await rowData.nth(0).innerText(),
         Parameter: await rowData.nth(1).innerText(),
         Description: await rowData.nth(2).innerText()

      }

      bookdata.push(obj)

   }

   console.log(bookdata)

})

