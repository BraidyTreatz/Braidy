


let content;

let dateElement = document.getElementById('appointment_time');

let dateOne = document.querySelectorAll('.dateAndTime')[0];
let dateTwo = document.querySelectorAll('.dateAndTime')[1];
let dateThree = document.querySelectorAll('.dateAndTime')[2];

dateOne.onclick = function(){
    dateTwo.hidden = true;
    dateThree.hidden = true;
    content = dateOne.innerHTML
    dateElement.value = content
};

dateTwo.onclick = function(){
    dateOne.hidden = true;
    dateThree.hidden = true;
    content = dateTwo.innerHTML
    dateElement.value = content
}

dateThree.onclick = function(){
    dateOne.hidden = true;
    dateTwo.hidden = true;
    content = dateThree.innerHTML
    dateElement.value = content
}

let submit = document.button


/*submit.onclick() = function(){
    if(dateTwo.hidden === true || dateThree.hidden === true){
        window.onload = dateOne.style.display
    }
    else if (dateOne.hidden === true || dateThree.hidden === true) {
        window.onload = dateTwo.style.display
    }
    else if (dateOne.hidden === true || dateTwo.hidden === true){
        window.onload = dateThree.style.display
    }
};*/








