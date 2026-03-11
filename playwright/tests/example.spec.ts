import { test, expect } from '@playwright/test';



test.describe('group 1',()=>{
 

test('test 1 @smoke', async ({ page }) => {
 
   console.log("Test 1")
});

test('test 2 @smoke', async ({ page }) => {
 
   console.log("Test 2")
});

})


 test.describe('group 2',{tag: "@regression"},()=>{

test('test 3 ', async ({ page }) => {
 
   console.log("Test 3")
});

test('test 4', async ({ page }) => {
 
   console.log("Test 4")
});
test('test 5', async ({ page }) => {
 
   console.log("Test 5")
});
})




