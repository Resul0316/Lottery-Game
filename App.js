let inputText = document.getElementById("numbers");
let button = document.getElementById("run-button");
let output = document.getElementById("output");

button.addEventListener("click", loteryNumbers);

function loteryNumbers(){
    output.innerHTML = "";
    let n = inputText.value;
    let myArray = []
    
    if (n == ""){
        alert('Please enter a number...');
    }else if (n > 8){
        alert("Please enter a number smaller than 8");
    }else{
        for (let i = 0; i < n ; i++){
            myArray = [];
            while (true){
                let number = Math.round(Math.random() * 90);
                if (!myArray.includes(number) && number != 0){
                    myArray.push(number);
                    if(myArray.length == 7){
                        break; 
                }

                }

            }
            myArray.push(Math.round(Math.random() * 90));
            let newArray = myArray.slice(0,6).sort(function(a, b){return a - b}).join("-");
            let secondArray = myArray.slice(6,8).join("|");
            let result = newArray + "|"+ secondArray;
            let outputCreate = document.createElement("p");
            output.appendChild(outputCreate);
            outputCreate.innerHTML =result;
        }
    }
}






