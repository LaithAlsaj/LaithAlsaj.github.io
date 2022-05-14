const OMain = document.getElementById("OtherMain")
const H1 = document.getElementById("H1")

document.getElementById("Submit").onclick = function(){
    OMain.innerHTML = "";
    console.log("Hey");
    H1.innerHTML = "Thank you!";
}