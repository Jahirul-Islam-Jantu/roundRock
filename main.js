const helpMeButton = document.querySelector("#help_me");
const helpBtn = document.querySelector("#help_btn");
const helpButton = document.querySelector("#help_button");
const inputName = document.querySelector("#name");
const inputMail = document.querySelector("#email");
const subButton = document.querySelector("#submit_btn");
const paragraph = document.querySelector(".paragraph");
const heroText = document.querySelector('.hero_para');

let currentText = heroText.textContent;
let nextText = "Changed by JS!";

const formValues = {
    name: "",
    email: "",
}

let currentPara = paragraph.textContent;
let changedPara = "A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.A lots of paragraph's here are changed by dom.";


function clickHandlerHelpMeButton(e) {
    heroText.innerHTML = nextText;
    const temp = currentText;
    currentText = nextText;
    nextText = temp;

}

function helpBtnHandler(){
    
}

function helpButtonHandler(e) {
    paragraph.innerHTML = changedPara;
    const temporaryPlace = currentPara;
    currentPara = changedPara;
    changedPara = temporaryPlace;

    paragraph.classList.toggle('paragraph1');
    paragraph.classList.toggle('paragraph2');
}
function textInputHandler (event){
    formValues.name= event.target.value;
}
function mailInputHandler(event) {
    formValues.email= event.target.value;
}
function subButtonHandler(){
    confirm(`Are You Sure To Confirm?

Name: ${formValues.name} 
E-mail: ${formValues.email}

Press "Ok" To Confirm.`);
} 










helpMeButton.addEventListener('click', clickHandlerHelpMeButton);
helpBtn.addEventListener('click', helpBtnHandler);
helpButton.addEventListener('click', helpButtonHandler);
inputName.addEventListener('keyup', textInputHandler);
inputMail.addEventListener('keyup', mailInputHandler);
subButton.addEventListener('click', subButtonHandler);
