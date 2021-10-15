function createNav() {
    const homeBtn = document.createElement("button");
    homeBtn.innerHTML = "HOME";
    const menuBtn = document.createElement("button");
    menuBtn.innerHTML = "MENU";
    const contactBtn = document.createElement("button");
    contactBtn.innerHTML = "CONTACT";

    homeBtn.classList.add("button-nav");
    menuBtn.classList.add("button-nav");
    contactBtn.classList.add("button-nav");

    homeBtn.setAttribute("id","home-btn");
    menuBtn.setAttribute("id","menu-btn");
    contactBtn.setAttribute("id","contact-btn");

    const nav = document.querySelector(".nav-bar");
    nav.append(homeBtn);
    nav.append(menuBtn);
    nav.append(contactBtn);
}

function initLoadPage() {
    createNav();

    const headline = document.createElement("H1");
    const headlineText = document.createTextNode("Samurai Sushi Boat");
    headline.appendChild(headlineText);
    headline.setAttribute('id','headline');

    const content = document.getElementById("content");
    // console.log(content);
    content.appendChild(headline);
    console.log("load");

    const image = document.createElement("img");
    image.src = "https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg";
    image.alt = "Combination Sashimi Plate";

    const wonderWords = document.createElement("p");

    const hello = document.createTextNode("Hello!");
    const intro = document.createTextNode("We are a family-operated business, established in the \
        Grand Lake area of Oakland since 2005.");
    const desc = document.createTextNode("We offer both water canal style sushi in custom-made boats, \
        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \
        quick bite to eat during the workday, a birthday celebration, watching the big game, or \
        relaxing and having a delicious meal.");
    const ending = document.createTextNode("Love, Mama-San and Papa-San");
    wonderWords.append(hello);
    wonderWords.append(document.createElement("br"));
    wonderWords.append(intro);
    wonderWords.append(document.createElement("br"));
    wonderWords.append(desc);
    wonderWords.append(document.createElement("br"));
    wonderWords.append(ending);

    
    content.appendChild(image);
    content.append(wonderWords);

    // Include Hours, Location

    // setup the button to be disabled so user can't press it again to reload the page.
}

export default initLoadPage;