imgObject = document.createElement("img");
imgObject.style.width = "100%";

function processLink(link) {
	let babyAnimalContainer;
	imgObject.src = link;
	babyAnimalContainer = document.getElementById("link-img");
	imgObject.alt = imgObject.src;
	babyAnimalContainer.appendChild(imgObject);
}

