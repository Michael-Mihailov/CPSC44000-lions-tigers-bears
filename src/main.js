let timer
let deleteFirstPhotoTimeout


async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        createBreedList(data.message);
    } catch (e) {
        console.log("ERROR: Could not load breed list");
    }
}

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a dawg breed</option>
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
}

async function loadByBreed(breed) {
    if (breed != "Choose a dawg breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        createSlideshow(data.message);
    }
}

function createSlideshow(images) {
    let index = 0;
    clearInterval(timer);
    clearTimeout(deleteFirstPhotoTimeout);

    if (images.length == 0) return;
    if (images.length == 1) {
        document.getElementById("slideshow").innerHTML = `
            <div class="slide" style="background-image: url('${images[0]}')"></div>
            <div class="slide"></div>
        `;
        return;
    }

    document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
    `;
    index += 2; // for the two images already loaded
    timer = setInterval(nextSlide, 2500);


    function nextSlide() {
        document.getElementById("slideshow").insertAdjacentHTML("beforeend", `
            <div class="slide" style="background-image: url('${images[index = index % images.length]}')"></div>
        `);
        index++;
        deleteFirstPhotoTimeout = setTimeout(() => {
            document.querySelector(".slide").remove();
        }, 1000);
    }
}


start()