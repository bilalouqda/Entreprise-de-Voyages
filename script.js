import destinations from './destinations.json' assert { type: 'json' };

const travelOffers = [
    { name: "Offer 1", description: "Offer 1.", image: "images/bali-pagoda-indonesia.jpg", price: "1000DH" },
    { name: "Offer 2", description: "Offer 2.", image: "images/hassan-ii-mosque-surrounded-by-water-buildings-blue-sky-sunlight.jpg", price: "1200DH" },
    { name: "Offer 3", description: "Offer 3.", image: "images/beautiful-view-empire-states-skyscrapers-new-york-city.jpg", price: "800DH" }
];

function addDestinations() {
    const destinationList = document.getElementById("destination-list");
    destinations.forEach(destination => {
        const destinationDiv = document.createElement("div");
        destinationDiv.classList.add("destination");
        const image = document.createElement("img");
        image.src = destination.image;
        image.alt = destination.name;

        image.style.width = "700px"; 
        image.style.height = "300px";

        const title = document.createElement("h3");
        title.textContent = destination.name;
        title.style.textAlign = "center"; 

        const description = document.createElement("p");
        description.textContent = destination.description;

        destinationDiv.appendChild(image);
        destinationDiv.appendChild(title);
        destinationDiv.appendChild(description);
        destinationList.appendChild(destinationDiv);
    });
}

function displayTravelOffers() {
    const offersSection = document.getElementById("offers");
    travelOffers.forEach(offer => {
        const offerDiv = document.createElement("div");
        offerDiv.classList.add("offer");

        const image = document.createElement("img");
        image.src = offer.image;
        image.alt = offer.name; 
        
        image.style.width = "700px"; 
        image.style.height = "300px";

        const title = document.createElement("h3");
        title.textContent = offer.name;

        const description = document.createElement("p");
        description.textContent = offer.description;

        const price = document.createElement("p");
        price.textContent = "Price: " + offer.price;

        offerDiv.appendChild(image);
        offerDiv.appendChild(title);
        offerDiv.appendChild(description);
        offerDiv.appendChild(price);

        offersSection.appendChild(offerDiv);
    });
}
window.addEventListener("load", displayTravelOffers);
window.addEventListener("load", addDestinations);
