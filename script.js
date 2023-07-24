const rainContainer = document.querySelector(".rain-container");

const amount = 75; // amount of raindops
let i = 0;

// Looping and creating the raindrop then adding to the rainContainer
while (i < amount) {

    //  Creating and Element
    const drop = document.createElement("i");

    //   CSS Properties for raindrop
    const raindropProperties = {
        width: 3 + "px",
        positionX: Math.floor(Math.random() * window.innerWidth) + "px",
        delay: Math.random() * -20 + "s",
        duration: Math.random() * 2 + 0.5 + "s",
        bg: "white",
        opacity: Math.random() * 0.4 + 0.1
    };

    //   Setting Styles for raindrop
    drop.style.width = raindropProperties.width;
    drop.style.left = raindropProperties.positionX;
    drop.style.animationDelay = raindropProperties.delay;
    drop.style.animationDuration = raindropProperties.duration;
    drop.style.background = raindropProperties.bg;
    drop.style.opacity = raindropProperties.opacity;

    //   Appending the raindrop in the raindrop container
    rainContainer.appendChild(drop);
    i++;
}

function handleRainResize() {
    var drops = rainContainer.children

    for (let j = 0; j < drops.length; j++) {
        drops[j].style.transition = 'left 2s'
        drops[j].style.left = Math.floor(Math.random() * window.innerWidth) + "px"
    }
}


card = document.getElementsByClassName("card")[0]
images = document.getElementsByClassName("img")

window.addEventListener("resize", () => { handleResize() })

var resizing = false
function checkForResize() {
    resizing = false

    if (resizing == false) {
        handleRainResize()
    }

}

function handleResize(first = false) {
    if (window.innerWidth > 1130) {
        card.style.transform = 'scale(1)'
    } else {

        if (window.innerWidth <= 730) {
            card.style.transform = 'scale(0.7)'
            card.style.maxWidth = '129vw'
        } else {
            if (window.innerWidth <= 970) {
                card.style.transform = 'scale(0.85)'
            } else {
                if (window.innerWidth <= 1130) {
                    card.style.transform = 'scale(0.95)'
                }
            }
        }
    }

    if (first == false) {
        resizing = true
        setTimeout(() => { checkForResize() }, 1000)
    }
}
handleResize(true)