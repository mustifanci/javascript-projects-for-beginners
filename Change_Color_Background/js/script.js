let button = document.getElementsByTagName("button");
let body =document.getElementsByTagName("BODY")[0];
const colors = ["red","blue","purple","green","orange"];

body.style.backgroundColor = "red"
button.addEventListener ("click", changecolor);

function changecolor() {
    const colorIndex= (Math.random()*colors.length+1)
    body.style.backgroundColor = colors[colorIndex]
}


