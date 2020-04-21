var header = document.getElementById("headerGroupArea");
var bodyGroup = document.getElementById("bodyGroupArea");
var toggle = document.getElementById("toggle")

var subTitle = document.getElementsByClassName("subtitle");
var titles = document.getElementsByClassName("titles");

var percents = document.getElementsByClassName("percent");

var overviewBoxes = document.getElementsByClassName("overviewBox");
var socialBoxes = document.getElementsByClassName("socialBox");

function onBodyClick(){
    if(toggle.innerHTML === "Dark Mode"){
        toggle.innerHTML = "Light Mode"
    } else {
        toggle.innerHTML = "Dark Mode"
    }
    
    for(var i = 0; i < subTitle.length; i++){
        subTitle[i].classList.toggle('subTitleDark')
    }

    for(var i = 0; i < titles.length; i++){
        titles[i].classList.toggle('titleDark')
    }

    for(var i = 0; i < overviewBoxes.length; i++){
        overviewBoxes[i].classList.toggle('cardDark')
    }

    for(var i = 0; i < socialBoxes.length; i++){
        socialBoxes[i].classList.toggle('cardDark')
    }

    header.classList.toggle('headerDark');
    bodyGroup.classList.toggle('bodyDark');
}
