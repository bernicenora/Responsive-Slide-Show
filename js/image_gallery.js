const images = document.getElementsByClassName("thumbnail");
const selected = document.getElementById("selected");
const imagelist = images.thumbnail.getElementsByTagName("img");

const opacity = 0.5;
var count=0;

showSlides();

function showSlides(){
    var i;
    for(i=0;i<images.length;i++){
        images[i].style.display="none";
    }
    count++;
    if (count>images.length){count = 1;}
    images[count-1].style.display="grid";
    setTimeout(showSlides,5000);
}

//window.onload = function(){
    //console.log(imagelist.length-1);
   //for(i=0;i<imagelist.length;i++){
    //console.log(imagelist[i].src);
        //console.log(selected.src);
        //console.log(imagelist[i].src);
        //console.log(i);
        //selected.src = imagelist[i].src;
        //console.log(selected.src);
        //console.log(imagelist[i].src);
        //setTimeout(function(){selected.src = imagelist[i].src;},5000);
        /*if (selected.src != imagelist[i].src){
        count = count + 1;
        console.log(imagelist[i].src);
    }*/
    //}


//}

/*function zoomImg(e){
    for(i=0;i<images.length;i++){
       //console.log(selected.src);
       //console.log(e.target.src);


        // Remove fadeIn class after animation time elapsed
        //setTimeout(function(){selected.classList.remove("fade-in");},600);

    }
}*/
