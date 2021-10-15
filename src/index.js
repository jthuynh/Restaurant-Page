import initLoadPage from './initPage';
initLoadPage();
// console.log("Hello work");
// alert("does this work");

// write tab switching logic
// each tab has event listener that wipes out the current contents
// runs correct tab module to populate it again
function loadNewPage(e) {
    // wipe content
    // run correct tab
}
function setupTabBrowsing() {
    const buttons = document.querySelectorAll(".nav-bar");
    console.log(buttons);
    buttons.forEach(element => {
        console.log("hello");
    });
}

setupTabBrowsing();
