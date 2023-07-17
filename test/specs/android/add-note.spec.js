 
//import AddNoteScreen from "../../screenobjects/android/add-note.screen";
import AddNoteScreen from "../../specs/screenobjects/android/add-note.screen"
 
describe('Add notes ',()=>{
    it('Skip tutrial ', async () =>{
 
        await AddNoteScreen.skipBtn.click();
       
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

    })
    it('add note ', async () =>{
 
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // add note title
    await AddNoteScreen.noteHeading.addValue("Anime List");

    // add note body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // save the changes
    await AddNoteScreen.saveNote();

    // assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
    })
  
})