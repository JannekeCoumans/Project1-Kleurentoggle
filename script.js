const menuImg = document.getElementById('menuImg');
const menu = document.getElementById('colorMenu')
const bodyBg = document.body;
const changeH1Text = document.getElementById('h1Text');

// // Functies van openen en sluiten van menu
const menuOpen = function(){
    menu.setAttribute('style', 'height: 460px;');
}

const menuClose = function(){
    menu.setAttribute('style', 'height: 0px;');
}

// Hier klapt het menu uit als ik over de menuknop hover.
menuImg.addEventListener("mouseover", function(){
    menuOpen();
});

menu.addEventListener("mouseleave", function(){
    menuClose();
});

// Hier verandert #homeBtn de achtergrondkleur
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener("click", function(){
    bodyBg.setAttribute('style', 'background-color: #FFF;');
    menuClose();
    changeH1Text.innerHTML = "Home";
})

// Hier verandert #redBtn de achtergrondkleur
const redBtn = document.getElementById('redBtn');
redBtn.addEventListener("click", function(){
    bodyBg.setAttribute('style', 'background-color: #ed4743;');
    menuClose();
    changeH1Text.innerHTML = "Rood";
})

// Hier verandert #greenBtn de achtergrondkleur
const greenBtn = document.getElementById('greenBtn');
greenBtn.addEventListener("click", function(){
    bodyBg.setAttribute('style', 'background-color: #5cc266;');
    menuClose();
    changeH1Text.innerHTML = "Groen";
})

// Hier verandert #yellowBtn de achtergrondkleur
const yellowBtn = document.getElementById('yellowBtn');
yellowBtn.addEventListener("click", function(){
    bodyBg.setAttribute('style', 'background-color: #e7c900;');
    menuClose();
    changeH1Text.innerHTML = "Geel";
})

// Hier verandert #blueBtn de achtergrondkleur
const blueBtn = document.getElementById('blueBtn');
blueBtn.addEventListener("click", function(){
    bodyBg.setAttribute('style', 'background-color: #299ed3;');
    menuClose();
    changeH1Text.innerHTML = "Blauw";
})