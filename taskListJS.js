var a= 3;
console.log(a);

function addText(){
    const textbox= document.getElementById("addTask");
    //alert(textbox);
    //const text = document.createTextNode("Welcome to My channel");
    let textbox2= document.getElementById("addTask2");
    textbox2.value= textbox.value;
    textbox.value= "";
    //textbox.appendChild(text);
    //const text= "Welcome";
    //textbox.appendChild(text);
    //textbox.textContent += "WelCome";
    //let textbox2= document.getElementById("addTask2");
}

function clearText(){
    let textbox2= document.getElementById("addTask2");
    textbox2.value= ""
}