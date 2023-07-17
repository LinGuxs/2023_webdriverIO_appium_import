class CartPage {

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
  }
/*
    get skipBtn() {
      return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }
  
    get addNoteTxt() {
      return $('//*[@text="Add note"]');
    }
  
    get textOption() {
      return $('//*[@text="Text"]');
    }
  
    get textEditing() {
      return $('//*[@text="Editing"]');
    }
  
    get noteHeading() {
      return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }
  
    get noteBody() {
      return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
  
    get editBtn() {
      return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }
  
    get viewNote() {
      return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
  
    async saveNote() {
      await driver.back();
      await driver.back();
    }
    */
  }
  //module.exports = new CartPage();
  export default new CartPage();
   
  