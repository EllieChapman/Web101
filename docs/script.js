const red = 'rgb(255,0,0)'
const green = 'rgb(0,255,0)'
const blue = 'rgb(0,0,255)'
const cols = [red, green, blue]
let count = 0

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
function ouch() {
    count = (count+1)%3
    myHeading.style.color=cols[count]
    //alert('Ouch! Stop poking me!');
}
document.getElementById("dave").onclick = ouch