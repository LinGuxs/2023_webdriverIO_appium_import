 
 
 require("@babel/register")
 
 import * as fs from 'fs';
 
  import CartPage from "../androidShoppingPOM/CartPage.js"
  import FormPage from "../androidShoppingPOM/FormPage.js"
  import CataloguePage from "../androidShoppingPOM/CataloguePage.js"
 
/*
 
 
    });
  */
 //   https://bobbyhadz.com/blog/javascript-error-err-module-not-found-cannot-find-module
 // https://stackoverflow.com/questions/65384754/error-err-module-not-found-cannot-find-module WOW
 //https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module
    describe('Add Notes', () => {
      it('DEbugging ', async () => {
       console.log("test at main")
   ///  await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]')
     //     .addValue("Rahul Shetty");
        await FormPage.setNameField()
        await FormPage.setGender()
        await FormPage.setDropDown()

        await CataloguePage.addAnItem()
        await CataloguePage.approveItem()

        await CartPage.setTerms()
        await CartPage.setProceed()
      });
     
    });