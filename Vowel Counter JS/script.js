var displayMessage = document.getElementById('message')
var input = document.getElementById('input')
var button = document.getElementById('button')
var counter = 0;

function removeAfterSetTime() {
    location.reload(); }


button.addEventListener('click', () => {
    var input = document.getElementById('input').value.toLowerCase();
    var split = input.split("");
    
    for(var i=0; i<split.length; i++  ) {
        if(split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u') {
            counter++;
        }
        var timeout = setTimeout(removeAfterSetTime, 5000);
    }
        // if(split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u') {
        //     counter++;
        // }
        // var timeout = setTimeout(removeAfterSetTime, 2000)
        if(counter > 1) {
            displayMessage.innerHTML = `'${input}' has ${counter} vowels.`  
        }
       else {
        displayMessage.innerHTML = `'${input}' has ${counter} vowel.` 
       }
        

    
})