const rainContainer = document.querySelector(".rain-container");
const starContainer = document.getElementById('particles-js')

disableRainDiv = document.getElementsByClassName("disableraindiv")[0]
rainEnabled = true
rainChanged = 0
disableRainDiv.addEventListener('click', () => {
    if (rainEnabled == true) {
        rainContainer.style.display = 'none'
        starContainer.style.display = 'none'

        disableRainDiv.innerHTML = '<p>Enable Animations</p>'
    } else {
        rainContainer.style.display = 'block'

        disableRainDiv.innerHTML = '<p>Disable Animations</p>'
    }
    rainEnabled = rainEnabled ? false : true
    rainChanged += 1

    if (rainChanged >= 10) {
        disableRainDiv.innerHTML = '<p>Button Break :(</p>'
    }
})



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
Gcard = document.getElementsByClassName("gcard")[0]
images = document.getElementsByClassName("img")

window.addEventListener("resize", () => { handleResize() })

var resizing = false
function checkForResize() {
    resizing = false

    if (resizing == false) {
        handleRainResize()
    }

}

function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

cardHover = document.getElementsByClassName('card-hover')[0]
galleryHover = document.getElementsByClassName('gallery-hover')[0]

function handleResize(first = false) {
    diagonal = Math.sqrt(window.innerHeight ** 2 + window.innerWidth ** 2)

    rainContainer.style.width = diagonal + 'px'
    rainContainer.style.height = diagonal + 'px'


    if (mobileCheck() == true) {
        card.style.transform = 'scale(1.4)'
        card.style.maxWidth = '140vw'

        Gcard.style.transform = 'scale(1.4)'
        Gcard.style.maxWidth = '140vw'

        document.body.style.height = '100dvh'
        document.body.style.width = '100dvw'

        galleryHover.style.height = '50dvh'
        cardHover.style.height = '50dvh'
    } else {

        if (window.innerWidth > 1130) {
            card.style.transform = 'scale(1)'
            Gcard.style.transform = 'scale(1)'
        } else {

            if (window.innerWidth <= 550) {
                Gcard.style.transform = 'scale(0.60)'
                Gcard.style.maxWidth = '145vw'
            } else {
                if (window.innerWidth <= 730) {
                    card.style.transform = 'scale(0.7)'
                    card.style.maxWidth = '129vw'

                    Gcard.style.transform = 'scale(0.7)'
                    Gcard.style.maxWidth = '129vw'

                } else {
                    if (window.innerWidth <= 970) {
                        card.style.transform = 'scale(0.85)'
                        Gcard.style.transform = 'scale(0.85)'
                    } else {
                        if (window.innerWidth <= 1130) {
                            card.style.transform = 'scale(0.95)'
                            Gcard.style.transform = 'scale(0.95)'

                        }
                    }
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



galleryHover.addEventListener('mouseover', () => { handleGalleryHover() })
galleryHover.addEventListener('mousedown', () => { handleGalleryHover() })

cardWrapper = document.getElementsByClassName('card-wrapper')[0]
galleryWrapper = document.getElementsByClassName('gallery-wrapper')[0]

var moving = false

function handleGalleryHover() {
    if (moving == false) {
        moving = true

        cardWrapper.style.transition = 'transform 1s'
        galleryWrapper.style.transition = 'transform 1s'

        galleryWrapper.style.transform = 'translateY(0vh)'
        cardWrapper.style.transform = 'translateY(-100vh)'

        document.body.style.backgroundColor = 'rgb(0, 0, 0)'

        if (rainEnabled == true) {
            rainContainer.style.opacity = 0

            setTimeout(() => {
                rainContainer.style.display = 'none'
            }, 1000)

            starContainer.style.display = 'block'

            setTimeout(() => {
                starContainer.style.opacity = 1
            }, 1)

        }

        setTimeout(() => {
            cardWrapper.style.transition = 'transform 0s'
            galleryWrapper.style.transition = 'transform 0s'
            moving = false
        }, 750)
    }
}


cardHover.addEventListener('mouseover', () => { handleCardHover() })
cardHover.addEventListener('mousedown', () => { handleCardHover() })



function handleCardHover() {
    if (moving == false) {
        moving = true

        cardWrapper.style.transition = 'transform 1s'
        galleryWrapper.style.transition = 'transform 1s'

        galleryWrapper.style.transform = 'translateY(100vh)'
        cardWrapper.style.transform = 'translateY(0vh)'

        document.body.style.backgroundColor = 'rgb(33, 33, 33)'

        if (rainEnabled == true) {
            rainContainer.style.display = 'block'
            setTimeout(() => {
                rainContainer.style.opacity = 1
            }, 1)

            starContainer.style.opacity = 0

            setTimeout(() => {
                starContainer.style.display = 'none'
            }, 1000)
        }

        setTimeout(() => {
            cardWrapper.style.transition = 'transform 0s'
            galleryWrapper.style.transition = 'transform 0s'
            moving = false
        }, 750)

    }
}

images = [
    {
        "url": "https://media.discordapp.net/attachments/1139037566478331986/1140395205057597480/VRChat_2023-08-13_14-27-01.884_1920x1080.png?width=500&height=500",
        "title": "TREASURE"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1139763349240946799/VRChat_2023-08-12_02-18-24.427_1920x1080.png?width=400&height=400",
        "title": "CAN I SIT ON YOUR LAP?"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140135855789453322/SPOILER_VRChat_2023-08-12_22-24-10.362_1920x1080.png?width=500&height=500",
        "title": "PECK INSPECTION"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140395205388931193/VRChat_2023-08-13_14-41-05.158_1920x1080.png?width=500&height=500",
        "title": "DOMINANCE"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1144104751290667028/VRChat_2023-08-11_21-03-14.230_1920x1080.png?width=500&height=500",
        "title": "TOILET SEAT"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1144104751571677314/VRChat_2023-08-11_20-17-22.669_1920x1080.png?width=500&height=500",
        "title": "WHERE AM I LOOKING"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140135859182645388/SPOILER_VRChat_2023-08-12_19-50-57.878_1920x1080.png?width=500&height=500",
        "title": "KISSES"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140135858360553552/VRChat_2023-08-12_21-23-20.122_1920x1080.png?width=500&height=500",
        "title": "GYMNASTICS"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140136296476590222/VRChat_2023-08-12_21-24-55.941_1920x1080.png?width=500&height=500",
        "title": "PENGUIN"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140135859685957672/SPOILER_VRChat_2023-08-12_19-51-37.612_1920x1080.png?width=500&height=500",
        "title": "PAX"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140135860424151040/VRChat_2023-08-12_19-52-26.302_1920x1080.png?width=500&height=500",
        "title": "AFK"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140135856926105683/VRChat_2023-08-12_21-27-34.131_1920x1080.png?width=500&height=500",
        "title": "WHAT'YA LOOKIN AT?"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140104317517443162/VRChat_2023-08-13_03-05-55.991_1920x1080.png?width=500&height=500",
        "title": "GROUP SELFIE"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/802331181219708968/1143698897345191996/20230811071601_1.jpg?width=500&height=500",
        "title": "CARDBOARD"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1134277868478795877/1139317900663078932/VRChat_2023-08-10_23-00-42.016_1920x1080.png?width=500&height=500",
        "title": "W RIZZ"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1134277868478795877/1134309465865330728/VRChat_2023-07-28_02-01-44.270_1920x1080.png?width=500&height=500",
        "title": "DANCE GROUP"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/654753565805379594/1139930862125842512/VRChat_2023-08-11_15-34-41.739_1920x1080.png?width=500&height=500",
        "title": "ON THE TABLE"
    },
    {
        "url": "https://cdn.discordapp.com/attachments/1139037566478331986/1140395206479462522/VRChat_2023-08-13_14-43-45.073_1920x1080.png?width=500&height=500",
        "title": "AFK AGAIN"
    },

]



var numberOfPages = Math.ceil(images.length / 4)
var images_appended = 0
for (let i = 0; i < numberOfPages; i++) {
    page = document.createElement('div')
    page.classList.add('page')

    repeat = images.length - images_appended

    if (repeat > 4) {
        repeat = 4
    }
    for (let j = 0; j < repeat; j++) {
        image = document.createElement('div')
        image.classList.add('image')

        image.addEventListener('mouseover', (e) => { handleImageHover(e.srcElement, i, j) })
        image.addEventListener('mouseout', (e) => { handleImageOut(e.srcElement) })

        image.addEventListener('mousedown', (e) => { handleImageClick(images[i * 4 + j].url) })

        image.style.backgroundImage = `url(${images[i * 4 + j].url})`

        page.appendChild(image)

        images_appended += 1
    }
    document.getElementsByClassName('gallery')[0].children[0].appendChild(page)
}

function handleImageHover(image, x, y) {
    image.innerHTML = `<h2>"${images[x * 4 + y].title}"</h2>`
}
function handleImageOut(image) {
    image.innerHTML = ``
}

function handleImageClick(url) {
    window.open(url.slice(0, -21), '_blank')
}

nextBtn = document.getElementsByClassName('next-btn')[0]
backBtn = document.getElementsByClassName('back-btn')[0]

nextBtn.addEventListener('mousedown', (e) => { handleGalleryButton(e) })
backBtn.addEventListener('mousedown', (e) => { handleGalleryButton(e) })

pageWrapper = document.getElementsByClassName('page-wrapper')[0]

menu = document.getElementsByClassName('menu')[0]

menu.children[0].children[1].innerHTML = `1/${numberOfPages}`

var page = 0
function handleGalleryButton(e) {
    if (e.srcElement.classList[0] == 'next-btn') {
        if (page + 1 < numberOfPages) {
            page += 1
        }
    } else {
        if (page > 0) {
            page -= 1
        }
    }

    menu.children[0].children[1].innerHTML = `${page + 1}/${numberOfPages}`
    pageWrapper.style.transform = `translateX(${-page * 40}rem)`
}

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 355,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": false,
        },
        "modes": {
            "grab": {
                "distance": 100,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 0.5,
                "speed": 1
            },
            "repulse": {
                "distance": 300,
                "duration": 1
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});