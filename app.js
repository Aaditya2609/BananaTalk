var buttonTranslate=document.querySelector("#translate");
var textInput=document.querySelector("#textArea");
var output=document.querySelector("#output")
function clickEventHandler()
{
   output.innerText="Translated Text :"+textInput.value;
}
buttonTranslate.addEventListener("click",clickEventHandler);