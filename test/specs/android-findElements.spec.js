describe('Android Elements Test',()=>{
    it.only('Find element by accessilibty id', async () =>{

        const appOption = await $('~App');  // find element by ID
        await appOption.click();
       // await driver.pause(5000);
        const actionBar = await $('~Action Bar');
        await driver.pause(5000);
        await expect(actionBar).toBeExisting();
         await driver.pause(5000);


    })
    it('Find element by classname',async()=>{
        const className = await $('android.widget.TextView');
         console.log("aedea");
        console.log(await className.getText());
        await expect(className).toHaveText("API Demos");
    })
    it.skip('Find element by xpath',async()=>{
        const xpathvar = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
         console.log("xpathvar");
        console.log(await xpathvar.click());
          await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
          await $('//android.widget.TextView[@text="Command two"]').click();

          const textAssertion = await $('//android.widget.TextView');
          await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    })
     it('Find element by UIAutomator',async()=>{
       await $('android=new UiSelector().textContains("Alert")').click();

       //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
       //https://webdriver.io/docs/selectors/#android-uiautomator
 
    })
    
    it.skip('Find element by multiple elements',async()=>{
        await $('android=new UiSelector().textContains("Alert")').click();
        const actualList = []
        //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
        //https://webdriver.io/docs/selectors/#android-uiautomator
        const textList = await $$('android.widget.Textview');

        for (const element of textList){
            actualList.push(await element.getText());
        }
  
     })
});