var buttonTranslate=document.querySelector("#translate");
var textInput=document.querySelector("textArea");
function clickEventHandler()
{
    console.log("Button CLicked Translation Starting");
    console.log(textInput.value);
}
buttonTranslate.addEventListener("click",clickEventHandler);