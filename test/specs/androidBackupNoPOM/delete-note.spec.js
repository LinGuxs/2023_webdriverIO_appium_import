describe('Add notes ',()=>{
 
    it.skip('delete note ', async () =>{
 
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
       
        //click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        // click on more icon
        await $('~More').click();

        // click on Delete item
        await $('/*[@text="Delete"]').click();

        //acept alert
        await driver.acceptAlert();
        
        // click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        await $('//*[@text="Trash Can"]');

        //assertion
        const trashCanItem = (await $('//[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).getText();

        await expect(trashCanItem).toHaveText(note);

    })
})