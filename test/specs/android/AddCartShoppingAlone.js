/*
driver.findElement(By.id("com.androidsample.generalstore:id/nameField")).sendKeys("Rahul Shetty");
driver.hideKeyboard();
driver.findElement(By.xpath("//android.widget.RadioButton[@text='Female']")).click();
driver.findElement(By.id("android:id/text1")).click();
driver.findElement(AppiumBy.androidUIAutomator("new UiScrollable(new UiSelector()).scrollIntoView(text(\"Argentina\"));"));
driver.findElement(By.xpath("//android.widget.TextView[@text='Argentina']")).click();
driver.findElement(By.id("com.androidsample.generalstore:id/btnLetsShop")).click();
driver.findElements(By.xpath("//android.widget.TextView[@text='ADD TO CART']")).get(0).click();
driver.findElements(By.xpath("//android.widget.TextView[@text='ADD TO CART']")).get(0).click();
driver.findElement(By.id("com.androidsample.generalstore:id/appbar_btn_cart")).click();	
*/
describe('Add Notes', () => {
    it('DEbugging ', async () => {
      
       
     
        await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]')
        .addValue("Rahul Shetty");
     
        await driver.hideKeyboard();
        await $('//*[@text="Female"]')
        .click();
        await $('//*[@resource-id="android:id/text1"]')
        .click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Argentina")')
        .click();
        await $('//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]')
        .click();

         await $('//*[@resource-id="com.androidsample.generalstore:id/productAddCart"]') //// bug porque solo selecciona uno
        .click();
 
        await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]')
        .click();
 

  //  https://webdriver.io/docs/api/element/touchAction/
        const longclick = await $('//*[@resource-id="com.androidsample.generalstore:id/termsButton"]') /// long click
        longclick.touchAction('longPress');
 
        await $('//*[@resource-id="android:id/button1"]') /// cerrar terminos condiciones
        .click();
 
         await $('android.widget.CheckBox') /// by class ?
         .click();
        

        await $('//*[@resource-id="com.androidsample.generalstore:id/btnProceed"]')
        .click();


  //      driver.findElement(AppiumBy.className("android.widget.CheckBox")).click();
	//driver.findElement(By.id("com.androidsample.generalstore:id/btnProceed")).click();
     /*
     WebElement ele = driver.findElement(By.id("com.androidsample.generalstore:id/termsButton"));
//	longPressAction(ele);
	driver.findElement(By.id("android:id/button1")).click();
	driver.findElement(AppiumBy.className("android.widget.CheckBox")).click();
	driver.findElement(By.id("com.androidsample.generalstore:id/btnProceed")).click();
	Thread.sleep(2000);
	*/
 

     
     //   await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]')
      //  .click();
     //   console.log(actualList[0])
      //  console.log(actualList[1])

  /*    
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
        .click();
  
      await expect($('//*[@text="Add note"]')).toBeDisplayed();*/
    });
  
    it.skip('add a note, save changes & verify note', async () => {
      await $('//*[@text="Add note"]').click();
      await $('//*[@text="Text"]').click();
      await expect($('//*[@text="Editing"]')).toBeDisplayed();
  
      // add note title
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue("Fav Anime List");
  
      // add note body
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Naruto\nOnePiece\nAOT");
  
      // save the changes
      await driver.back();
      await driver.back();
  
      // assertion
      await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
        .toBeDisplayed();
      await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
        .toHaveText("Naruto\nOnePiece\nAOT");
    });
  });