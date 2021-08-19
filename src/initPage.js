function initLoadPage() {
    let headline = document.createElement("H1");
    let headlineText = document.createTextNode("Welcome to Samurai Sushi Boat!");
    headline.appendChild(headlineText);
    headline.setAttribute('id','headline');
    
    let image = document.createElement("img");
    image.src = "https://storage.googleapis.com/wzukusers/user-12938003/images/57de0f7fcfba4d0Bx9j3/SUSHI1-edited-1.jpg";
    image.alt = "Combination Sashimi Plate";

    let wonderWords = document.createElement("p");

    let hello = document.createTextNode("Hello!");
    let intro = document.createTextNode("We are a family-operated business, established in the \
        Grand Lake area of Oakland since 2005.");
    let desc = document.createTextNode("We offer both water canal style sushi in custom-made boats, \
        and table service for larger groups. Feel free to drop by for any occasion, whether it's a \
        quick bite to eat during the workday, a birthday celebration, watching the big game, or \
        relaxing and having a delicious meal.");
    let ending = document.createTextNode("Love, Mama-San and Papa-San");
    wonderWords.append(hello);
    wonderWords.append(document.createElement("br"));
    wonderWords.append(intro);
    wonderWords.append(document.createElement("br"));
    wonderWords.append(desc);
    wonderWords.append(document.createElement("br"));
    wonderWords.append(ending);

    let content = document.getElementById("content");
    console.log(content);
    content.appendChild(headline);
    content.appendChild(image);
    content.append(wonderWords);
}

export default initLoadPage;