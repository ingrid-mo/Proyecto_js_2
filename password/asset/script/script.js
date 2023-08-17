
    
    
    document.querySelector("button").addEventListener("click", password);

 function password (){

        let value1 = document.getElementById("value1");
        let value2 = document.getElementById("value2");
        let value3 = document.getElementById("value3");
        
        let result = value1.value + value2.value + value3.value

        let parr = document.getElementById ("parr");

        if( result == "911"){
            parr.textContent= "Password 1 correct";
            parr.style.color = "green"

        }  else if( result == "714"){
            parr.textContent= "Password 2 correct";
            parr.style.color = "green"

        }else{
            parr.textContent= "Password incorrect";
            parr.style.color = "red"
        }

 }