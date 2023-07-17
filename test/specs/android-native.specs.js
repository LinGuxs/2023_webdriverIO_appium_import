describe('Android Native Features Test',() =>{
    it.skip('Access an Activity directoy 2', async() =>{ //no sirve
        
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
        await driver.pause(5000);
         
        await expect($('//*[@text="App/Demos"]')).toExist();
       
        
    
    })
    it('Access an Activity directoy', async() =>{  // works fine
       
        
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(5000);
         await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })
    it('Working widh dialog boxes', async() =>{

    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
    await driver.acceptAlert();

    //dismiss alert
    //await driver.dismissAlert();

    //click on the ok button
    //await $('//*[@resource-id="android;id/button1"]').click();
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

      
        
    })
    it.only('scrollable', async() =>{  // works fine
 //https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable
       
        await $('~App').click()
        await $('~Activity').click()
        
        
    //    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
   //       await $('~Secure Surfaces').click()
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click
         
    
          await expect($('~Secure Surfaces')).toExist();
            
        })
        it('scrollable horizontal', async() =>{  // works fine
            //https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable
   //https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable           
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");    
   // await driver.pause(5000);
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')   
    await driver.pause(5000);
   // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToBackward()')   
               
                 
                       
                   })
   
})


