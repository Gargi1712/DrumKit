
var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++)
{


document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var key=this.innerHTML;
      makeSound(key); 
      buttonAnimation(key);                        

this.style.color="white";


});
}

document.addEventListener("keypress",function(event)//event trigger the key press//
{
    console.log("key is pressed");
    makeSound(event.key);
    buttonAnimation(event.key);
})


function buttonAnimation(data)
{
    var buttonPressed=document.querySelector("." + data);
    buttonPressed.classList.add("pressed");


    setTimeout(function()
{
    buttonPressed.classList.remove("pressed");
},100);
}



function makeSound(data)
{
    switch (data) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
       case "a":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        case "s":
                    var audio=new Audio("sounds/snare.mp3");
                    audio.play();
                    break;
         case "d":
                        var audio=new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;    
         case "j":
                            var audio=new Audio("sounds/tom-2.mp3");
                            audio.play();
                            break;
          case "k":
                                var audio=new Audio("sounds/tom-3.mp3");
                                audio.play();
                                break;
          case "l":
                                    var audio=new Audio("sounds/tom-4.mp3");
                                    audio.play();
                                    break;

    
        default:
            console.log(data);
            
            break;
}

}
