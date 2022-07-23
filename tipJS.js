function calc(){
    const money= parseInt(document.getElementById("amount").value);
    const com= parseInt(document.getElementById("percent").value);

    //const total= money* com/ 100;

    document.getElementById("newCal").innerHTML="$"+ money* com/ 100;
    //const c= document.getElementById()
    //const c= document.getElementById("newCal");
   // c.value= total;
}