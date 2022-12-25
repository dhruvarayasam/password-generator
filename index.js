const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passDiv = document.getElementById("passwords")
let firstPass = document.createElement('p');
let secondPass = document.createElement('p');


function generateRandomPass() {
    let passString = "";
    let randomChar = ""

    for (let i = 0; i < 15; i++) {
        randomChar = characters[Math.floor((Math.random() * characters.length))];
        passString+=randomChar;
    }

    return passString;
}


function generatePassElements() {

    firstPass.setAttribute("id", "firstpass");
    secondPass.setAttribute("id", "secondpass");
    firstPass.className = 'password';
    secondPass.className = 'password';

    passDiv.appendChild(firstPass);
    passDiv.appendChild(secondPass);


    firstPass.textContent = generateRandomPass();
    secondPass.textContent = generateRandomPass();
}




