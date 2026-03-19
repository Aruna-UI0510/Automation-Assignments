import {Page} from '@playwright/test'


export class Amazon
{
    private page:Page
    constructor(page:Page)
    {
         this.page= page

    }

    async amazonpricelist()
    {
    await this.page.goto('https://amazon.com')
    await this.page.locator('#search').fill('watch')
    await this.page.locator('#searchIcon').click()

    const cleanpricelist:string[] =[]

    const pricelist= await this.page.locator('a-price-whole').count()
    for(let i=0 ;i<pricelist;i++)
    {
        let s=await this.page.locator('a-price-whole').nth(i).innerText()
        let str= s.replace(/[^0-9.]/g,"")
        cleanpricelist.push(str)
    }
    console.log(cleanpricelist.sort())
    }
}