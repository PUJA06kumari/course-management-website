let num1 = 8;
document.getElementById("first").textContent = num1;
let num2 = 2;
document.getElementById("second").textContent = num2;
let all = document.getElementById("overall")
function add()
{
    let sumall = num1 + num2;
    all.textContent = "SUM :" + sumall;
}
function subtract()
{
    let suball = num1 - num2;
    all.textContent = "SUBTRACT :" +suball;
}
function multiply()
{
    let mulall = num1*num2;
    all.textContent = "MULTIPLY :" +mulall;
}
function divide()
{
    let divall = num1/num2;
    all.textContent = "DIVIDE :" +divall;
}