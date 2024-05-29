const counter=document.getElementById("count")
const btnright = document.getElementById("btn-right")
const btnleft = document.getElementById("btn-left")
let c = 0;
let click = 0;
function incr1()
{
    
        if(c%2===0)
        {
           btnright.textContent="Even"
        }
        else
        {
            btnright.textContent = "Odd"
        }
    c += 2;
    counter.textContent = c;
    click++;
    btnleft.textContent = "Number of click = "  +click;
}
function incr2()
{
    if(c%2=== 0)
    {
        btnright.textContent = "Odd"
    }
    else
    {
        btnright.textContent = "Even"
    }
    c += 3;
    counter.textContent = c;
    click++;
    btnleft.textContent = "Number of click = "  +click;
}
function incr3()
{
    
        if(c%2===0)
        {
           btnright.textContent="Even"
        }
        else
        {
            btnright.textContent = "Odd"
        }
    
    c += 4;
    counter.textContent = c;
    click++;
    btnleft.textContent = "Number of click = "  +click;
}
function reset()
{
    counter.textContent = 0;
    btnleft.textContent = 0;
    btnright.textContent = "Even"
}