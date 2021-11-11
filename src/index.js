import {initLoadPage, createNav} from './initPage';
import loadContactPage from './contact';
import loadMenuPage from './menu';

createNav();
initLoadPage();

// write tab switching logic
// each tab has event listener that wipes out the current contents
// runs correct tab module to populate it again
function loadNewPage(e) {
    // wipe content

    // clear all text and nodes with innerHTML
    // const content = document.querySelector("content");
    // content.innerHTML = ""

    // loop to remove every last child; removes nodes
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }

    // run correct tab
    console.log("content wiped. running correct tab...");
    if (e.target.id == "home-btn") {
        initLoadPage();
        // console.log("loading home...");
    } else if (e.target.id == "menu-btn") {
        loadMenuPage();
        // console.log("loading menu...");
    } else if (e.target.id == "contact-btn") {
        loadContactPage();
        // console.log("loading contact-btn...");
    }
}
function setupTabBrowsing() {
    const buttons = document.querySelectorAll(".nav-bar");
    console.log(buttons);
    buttons.forEach(button => {
        button.addEventListener("click", loadNewPage);
        // disable the current button
    });
}

setupTabBrowsing();

// TODO: Add the disabling of clicked button and the restoring of the button once another is clicked
// 2. Create the contact page
// 3. Create the menu page
// 4. add the map to the contact page
// 5. add the photo slider for the menu page
// 6. Add the hours to the contact page

