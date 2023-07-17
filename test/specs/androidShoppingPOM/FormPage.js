class FormPage {

    //await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]')   .addValue("Rahul Shetty");
    get nameFieldbtn(){
        return $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]');
    }
   
 
     // await $('//*[@text="Female"]') .click();
  get radioButtonGender(){
    return $('//*[@text="Female"]');
}
   
// await $('//*[@resource-id="android:id/text1"]')  .click();
get pressDropDownMenu(){
    return $('//*[@resource-id="android:id/text1"]');
}
 

get btnLetsShop(){
    return $('//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]');
}
 
async setNameField() {
    await this.nameFieldbtn.addValue("Rahul Shetty");
    await driver.hideKeyboard();
    console.log("test")
  }
  async test() {
   console.log("test")
  }
    async setGender() {
    await this.radioButtonGender.click()
  }
  async setDropDown() {
    await this.pressDropDownMenu.click()
     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Argentina")')
    .click();
    await this.btnLetsShop.click()

  }
 
  }
  //module.exports = new CartPage();
  export default new FormPage();
   
  