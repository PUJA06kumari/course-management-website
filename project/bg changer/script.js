// let arr=["red","green","yellow","brown","pink","blue","black","purple","violet","indigo","orange"]

// function change()
// {
//     let main = Math.floor(Math.random()*11)
//     document.body.style.backgroundColor= arr[main]
// }



// function change()
// {
//     let arr = Math.round(Math.random()*10000000).toString(16) 
//     console.log(arr)
// document.body.style.backgroundColor = "#" +arr
// }

const maindiv = document.getElementById("divv")
function change()
{
    const size = Math.round(Math.random()*500)
    console.log(size)
    maindiv.style.height= size + "px"
    maindiv.style.width= size + "px"
    
}