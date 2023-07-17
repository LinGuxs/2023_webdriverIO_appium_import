describe('Add notes ',()=>{
    it('Skip tutrial ', async () =>{
 
       //await browser.pause(4000)
      // await browser.pause(9000)
       
    // cap.setCapability("autoGrantPermissions", "true");
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
       // let element = await driver.element("xpath", ".//android.widget.Button[@text='Allow']")
       // await element.click();
     //   await expect($('//*[text="Add note"]')).toBeDisplayed();
      /*
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
       
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

         
             (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')).addValue("Fav Anime list")
        
        
        
            await   $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("gus\nOK")*/

    })
    it('add note ', async () =>{
 
       
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        //await expect($('//*[@text="Editing"]')).toBeDisplayed();

         
             await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime list")
        
        
        
            await   $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("gus\nOK")
    })
  
})