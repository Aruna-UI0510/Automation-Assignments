import { test ,Page, expect} from '@playwright/test'


/**
 * My practice
 */
test('Pagabank Locator Actions',async ({page})=>
{

   await  page.goto("https://parabank.parasoft.com/")
   await  page.getByAltText('ParaBank').isVisible()
   const count:number=await page.locator("ul[class='leftmenu']>li").count()
   for(let i=0;i<count;i++)
   {

       let menuArray:string[]=[]
       let menu=await page.locator("ul[class='leftmenu']>li").nth(i).innerText()
       menuArray.push(menu??"")
       console.log(menuArray)
          
   }

   console.log(await page.locator('#headerPanel').getByRole('link',{name:'About Us'}).innerText())
   //await page.pause()
   console.log(await page.getByRole('img',{name: 'ParaBank'}).getAttribute('title'))
   //await page.pause()

   console.log(await page.locator('#headerPanel').getByRole('link',{name:'Services'}).innerText())
   await page.locator('#headerPanel').getByRole('link',{name:'Services'}).click()
   const seviceLocator=page.getByRole('heading',{name:"Available Bookstore SOAP services:"})
   await page.waitForTimeout(3000)
   let isvisible=await page.getByRole('heading',{name:"Available Bookstore SOAP services:"}).isVisible()
   if(isvisible){
        console.log("yes Visible")}
         await page.waitForTimeout(3000)
    interface Table{
       Method:string,
       Parameter:string,
       Description:string
    }

    let TableData:Table[]=[]
   await page.waitForTimeout(3000)
   let tableSelector=  page.locator('//span[text()="Bookstore services:"]/following::table[1]/tbody/tr')
   //await tableSelector.scrollIntoViewIfNeeded()
        let rowCount=await tableSelector.count()
        console.log(rowCount)

        for(let i=0 ;i<rowCount;i++)
        {
             let rowdata= tableSelector.nth(i).locator('td')

             let objecttable:Table={

                Method:await rowdata.nth(0).innerText()??"",
                Parameter:await rowdata.nth(1).innerText()??"",
                Description:await rowdata.nth(2).innerText()??""
             }

             TableData.push(objecttable??"")
               
        }
         console.log(TableData)

})
/**
 * Assignment ParaBank
 */

test('Assignment',async({page})=>
{

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


await page.goto('https://parabank.parasoft.com')

// Locate a element , validate visiblity then compare text visible
const logo = page.getByAltText('ParaBank')
await expect(logo).toBeVisible()
const imgsrc= await logo.getAttribute('src')
expect(imgsrc).toEqual('images/logo.gif')

// Locate the Text elemet and checks the visibility and comapre the text
const appTitle= page.locator('p.caption')
await expect(appTitle).toBeVisible()
const actualText=await appTitle.innerText()
expect(actualText).toEqual('Experience the difference')

//locate username input and enter a invalid username
const userinput= page.locator('//input[@name="username"]')
await userinput.fill('Abc')

//locate password input

const passwordinput=page.locator('//input[@name="password"]')

//locate the login button and click
const loginbtn= page.locator('//input[@value="Log In"]')
await loginbtn.click()

//Locate the error message

await page.getByRole('heading',{name:'Error!'}).isVisible()
const 





})

