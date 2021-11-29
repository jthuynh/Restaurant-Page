let slideIdx = 1;

function createSlideShowImgs() {
    // create img Obj that loops through and create image elements
    // either an array or array of maps -- decide which one is better
    // const imgObj = [{img: }]

    // create the left and right buttons
    // also add markers to show which page


    // add images to slides container
    const content = document.getElementById("content");

    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides-container");

    for (let i= 1; i < 14; i++) {
        var img = document.createElement("img");
        img.classList.add("mySlides");
        img.src = "../images/Menu/Image"+i+".jpeg";
        img.setAttribute("style","height:50%");
        slidesContainer.appendChild(img);    
    }

    content.appendChild(slidesContainer);

   

    // set up markers to show which page currently on
}

function plusDivs(n) {
    showImg(slideIdx += n);
}

function setupSlideShowArrows() {
    // for each button add event listeners if pressed. Either have it 
    // like a round robin or stop whenever it reaches the end

    // for each marker, it should be able to be pressed to go onto it

    // also add zoom to slideshow picture?
    const content = document.getElementById("content");

    // create the left and right buttons
    const leftBtn = document.createElement("button");
    leftBtn.classList.add("display-left");
    leftBtn.addEventListener("click", plusDivs(-1));

    const rightBtn = document.createElement("button");
    rightBtn.classList.add("display-right");
    rightBtn.addEventListener("click", plusDivs(1));

    content.appendChild(leftBtn);
    content.appendChild(rightBtn);
}

function showImg(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIdx = 1;
    }

    if (n < 1) {
        slideIdx = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    slides[slideIdx-1].style.display = "block";
}
function loadMenuPage() {
//     <img class="mySlides" src="img_snowtops.jpg">
// <img class="mySlides" src="img_lights.jpg">
// <img class="mySlides" src="img_mountains.jpg">
// <img class="mySlides" src="img_forest.jpg"></img>
    
    // create layout
    createSlideShowImgs();
    setupSlideShowArrows();
    showImg();
    // add event listeners

}

export default loadMenuPage;

// TODO: Figure out what the problem is with the buttons
// Resize the image to make it easier to read
// fix the layout of the slideshow