const images = document.getElementsByClassName("thumbnail");
const selected = document.getElementById("selected");
const imagelist = images.thumbnail.getElementsByTagName("img");//to access src of img tag
//Get the buttons
const left=document.getElementById("left");
const right=document.getElementById("right");

var count=0;

showSlides();
console.log("working");
function showSlides(){
    var i;

    for(i=0;i<imagelist.length;i++){
        imagelist[i].style.opacity = 1; //to reset opacity
        selected.src = imagelist[i].src;
    }
    count++;
    if (count>imagelist.length){count = 1;}
    imagelist[count-1].style.opacity = 0.5; // to set opacity of selected element
    selected.src = imagelist[count-1].src;
    setTimeout(showSlides,3000);
}

