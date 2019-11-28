const images = document.getElementsByClassName("thumbnail");
const selected = document.getElementById("selected");
const imagelist = images.thumbnail.getElementsByTagName("img");//to access src of img tag
//Get the buttons
const left=document.getElementById("left");
const right=document.getElementById("right");

var counter = 0;
var count=0;
var presentCount = 0;
showSlides();
//slideLeft();
//slideRight();

console.log("working");
function showSlides(){
    var i;

    for(i=0;i<imagelist.length;i++){
        imagelist[i].style.opacity = 1; //to reset opacity
        selected.src = imagelist[i].src;
    }
    //console.log("count before = "+count);

    count++;
    if (count>imagelist.length){count = 1;}

    imagelist[count-1].style.opacity = 0.5; // to set opacity of selected element
    selected.src = imagelist[count-1].src;
    setTimeout(showSlides,3000);
    document.getElementById("left").addEventListener("click", function(){
        counter = count;
        //console.log("count once clicked= "+count);

        presentCount=count -1 ;
        if (presentCount == 0|| count == 1){
            presentCount = imagelist.length;
        }
        //console.log("count once clicked= "+count);
        //console.log("present count once clicked= "+presentCount);
        //presentCount = count-1;

        //console.log("present Url = "+imagelist[presentCount-1].src);
        //if (count<0){count=1;}
        imagelist[presentCount-1].style.opacity = 0.5;
        selected.src = imagelist[presentCount-1].src;
        //console.log(selected.src);
        //console.log(imagelist[count-2].src);
        //console.log("i = "+i);

        //presentCount--;
//count = counter;
        //console.log("count after clicked= "+count);
        //console.log("present after clicked= "+presentCount);
        return;
    });

    document.getElementById("right").addEventListener("click", function(){
        counter = count;

        presentCount=count -1 ;
        //console.log(presentCount);
        if (presentCount == 0|| count == 1){
            presentCount = imagelist.length;
        }
        imagelist[presentCount+1].style.opacity = 0.5;
        selected.src = imagelist[presentCount+1].src;
        return;
    });
}

function slideLeft(){
    //console.log("left = "+selected.src);

}

function slideRight(){
   // console.log("right = "+selected.src);
}