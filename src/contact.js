function loadHours() {
    const content = document.getElementById("content");
    console.log(content);

    const header = document.createElement("h1");
    header.innerHTML = "HOURS & LOCATION";
    const hours = document.createElement("p");
    hours.id = "hours";
    hours.classList.add("hours");
    const monHours = document.createTextNode("Mon 11:30 AM - 10:00 PM");
    const tueHours = document.createTextNode("Tue  11:30 AM - 10:00 PM");
    const wedHours = document.createTextNode("Wed  11:30 AM - 10:00 PM");
    const thuHours = document.createTextNode("Thu  11:30 AM - 10:00 PM");
    const friHours = document.createTextNode("Fri  11:30 AM - 10:00 PM");
    const satHours = document.createTextNode("Sat  11:30 AM - 10:00 PM");
    const sunHours = document.createTextNode("Sun  5:00 PM - 10:00 PM");

    hours.append(monHours);
    hours.append(document.createElement("br"));
    hours.append(tueHours);
    hours.append(document.createElement("br"));
    hours.append(wedHours);
    hours.append(document.createElement("br"));
    hours.append(thuHours);
    hours.append(document.createElement("br"));
    hours.append(friHours);
    hours.append(document.createElement("br"));
    hours.append(satHours);
    hours.append(document.createElement("br"));
    hours.append(sunHours);
    hours.append(document.createElement("br"));

    header.appendChild(hours);
    content.appendChild(header);
}

function loadLocation() {
}

function loadContactPage() {
    loadHours();
}

export default loadContactPage;