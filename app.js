var buttonTranslate=document.querySelector("#translate");
var textInput=document.querySelector("#textArea");
var output=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/minion.json";

function getUrl(translationtext)
{
   return url+"?"+"text="+translationtext
}

function errorHandler(error)
{
   console.log("Some Error has occured "+ error);
   alert("Something Went Wrong!! Please Try After Sometime");
}
function clickEventHandler()
{
   var input=textInput.value;
   fetch(getUrl(input))
      .then(response=>response.json())
      .then(json=>{
         var translatedText=json.contents.translated
            output.innerText=translatedText;
      })
      .catch(errorHandler)
}
buttonTranslate.addEventListener("click",clickEventHandler);