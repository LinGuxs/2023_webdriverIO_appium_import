class CataloguePage {

    //await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]')   .addValue("Rahul Shetty");
    get productAddCartButton(){
        return $('//*[@resource-id="com.androidsample.generalstore:id/productAddCart"]');
    }
    get appbar_btn_cartButton(){
        return $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]');
                 
    }
   
async addAnItem() {
    await this.productAddCartButton.click()
  
    console.log("addAnItem")
  }
  async approveItem() {
    await this.appbar_btn_cartButton.click()
  
    console.log("approveItem")
  }
 
  }
 
  export default new CataloguePage();
   
  