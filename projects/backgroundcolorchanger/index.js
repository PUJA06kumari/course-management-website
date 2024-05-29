const colors=["red","green","yellow","black","blue","violet","grey","pink"]
let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener('click',function()
{
    const randomNumber=getrandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})

function getrandomNumber(){
    return Math.floor(Math.random()*colors.length);
}