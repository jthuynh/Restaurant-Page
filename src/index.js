import {initLoadPage, createNav} from './initPage';
import loadContactPage from './contact';
import loadMenuPage from './menu';

createNav();
initLoadPage();

function loadNewPage(e) {
    // wipe content

    // clear all text and nodes with innerHTML
    // const content = document.querySelector("content");
    // content.innerHTML = ""

    // loop to remove every last child; removes nodes
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }

    // removes map if it exists
    if (document.getElementById("map")) {
        console.log('inside');
        const map = document.getElementById("map");
        console.log(map.parentElement);
        map.parentElement.removeChild(map.parentElement.lastElementChild);
    }

    // run correct tab
    console.log("content wiped. running correct tab...");
    if (e.target.id == "home-btn") {
        initLoadPage();
    } else if (e.target.id == "menu-btn") {
        loadMenuPage();
    } else if (e.target.id == "contact-btn") {
        loadContactPage();
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
// 2. Create the contact page with hours and location -- DONE
// 3. Create the menu page
// 4. add the map to the contact page  -- DONE
// 5. add the photo slider for the menu page
// https://www.w3schools.com/w3css/w3css_slideshow.asp for photo slider 
// 6. Add the hours to the contact page  -- DONE
// 7. Separate the title from the content
// 8. Rename the Contacts page to hours and location
// https://www.sona-nyc.com/ use as an example to base off of

