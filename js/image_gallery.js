const images = document.getElementsByClassName("thumbnail");
const selected = document.getElementById("selected");

const opacity = 0.5;

//Set opacity of first image
images[0].style.opacity=opacity;

console.log(images);
for(i=0;i<images.length;i++){
    //console.log(images[i]).firstChild.nodeValue;
    images[i].addEventListener("click",zoomImg);
}

function zoomImg(e){
    for(i=0;i<images.length;i++){
        //Reset the opacity of all thumbnails
        images[i].style.opacity = 1;

        //Change current image to source of clicked image
        console.log(selected.src);
        selected.src = e.target.src;
        console.log(e);
        console.log(e.target.src);

        //Add a fade-in class
        selected.classList.add("fade-in");

        // Remove fadeIn class after animation time elapsed
        setTimeout(function(){selected.classList.remove("fade-in");},600);

        // Change opacity to variable value
        e.target.style.opacity=opacity;
    }
}
