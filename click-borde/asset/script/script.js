

let cat = document.getElementById ("image_sadcat");

document.querySelector("#image_sadcat").addEventListener("click", changeBorder);
 


function changeBorder (){
    console.log ( "holi");
   
    if (cat.classList.contains("clicked")){
        cat.classList.remove("clicked");
     
    } else {
        cat.classList.add("clicked");
 
    }
 }

 // cat.classList.toggle("clicked") cambia el estado del elemeto toogle;
// prblema de logica
// let isvisible = false;
//  function changeBorder (){
// 
   
//     if (isvisible){
//         cat.classList.remove("clicked");
//         isvisible = false
//     } else {
//         cat.classList.add("clicked");
//         isvisible = true
//     }
 