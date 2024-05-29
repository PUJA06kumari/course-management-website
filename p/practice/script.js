

const mainDiv = document.getElementById("main")

function fetchData()
{
    fetch('https://fakestoreapi.com/products')
    .then(function(r) {
      console.log(r.json())
      return r.json()
    } )
    .then(function(data) {
      console.log(data)
      displayData(data)
    })
    .catch(function(err) {
      console.log("my error is "+err)
    })
}
fetchData();















