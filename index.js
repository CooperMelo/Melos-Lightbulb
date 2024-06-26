// Setting Value
let lightOn = false

// light Thing (On)
function toggleLight() {
    if (lightOn == false) {
    lightOn = true
document.getElementById("html").style.backgroundColor = "black"
document.getElementById("bulbOn").style.visibility = "visible"
document.getElementById("bulbOff").style.visibility = "hidden"
var texts = document.getElementsByClassName("text");
        for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = "white";
        }
return

} // light Thing (Off)
 if (lightOn == true) {
     lightOn = false
document.getElementById("html").style.backgroundColor = "white"
document.getElementById("bulbOn").style.visibility = "hidden"
document.getElementById("bulbOff").style.visibility = "visible"
var texts = document.getElementsByClassName("text");
        for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = "black";
        }
return
}
}