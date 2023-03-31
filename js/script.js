//Rating page:
const surveyPage = document.querySelector(".hide-survey");
//Thank you page:
const thankPage = document.querySelector(".hide-thanks");
//Display score in thank you page
const displayScore = document.querySelector(".js-score");

//Event listener to add class of "selected" to the button the user clicks:
document.querySelectorAll("#fieldset input[type=button]").forEach(button => {
    button.addEventListener("click", function() {
      document.querySelectorAll("#fieldset input[type=button]").forEach(button => {
        //By calling the remove first, we ensure that only one button has the "selected" class at any given time.
        button.classList.remove("selected");
      });
      //Only the clicked button will have the "selected" class.
        button.classList.add("selected");
    });
  });

//Onclick added to the submit button element:
function display(event){
    //keeps page from reloading:
    event.preventDefault(); 
    
    let selectedOption = "";
    //This is a loop through all buttons in the #fieldset element to find and store the selected score:
    let buttons = document.querySelectorAll("#fieldset input[type=button]");
    for(var i = 0; i < buttons.length; i++){
        if(buttons[i].classList.contains("selected")) {
            selectedOption = buttons[i].value;
            break;
        }
    } 
    //If the user has not selected a score, the process stops with "return" and will not send the information:
    if(selectedOption === ""){
        return;
    } else {
         //hide Survey page:
         surveyPage.style.display = "none"
         //unhide thank you page:
         thankPage.style.display = "block"
         //add score to the span element
         displayScore.innerHTML = `${selectedOption}`    
    }          
}
