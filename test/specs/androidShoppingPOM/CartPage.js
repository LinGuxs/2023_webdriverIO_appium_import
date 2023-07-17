class CartPage {

    //await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]')   .addValue("Rahul Shetty");
    get closeTermsBtn(){
        return $('//*[@resource-id="android:id/button1"]');
    }
    get checkBoxBtn(){
      return $('android.widget.CheckBox');
    }
   get proceedBtn(){
    return $('//*[@resource-id="com.androidsample.generalstore:id/btnProceed"]');
   }
 

   
  
async setTerms() {
    const longclick = await $('//*[@resource-id="com.androidsample.generalstore:id/termsButton"]') /// long click
    longclick.touchAction('longPress');
    await this.closeTermsBtn.click();
  
    console.log("CartPage setTerms")
  }
  async setProceed() {
    await this.checkBoxBtn.click();
    await this.proceedBtn.click();
    console.log("CartPage setProceed")
  } 
  }
 
  export default new CartPage();
 