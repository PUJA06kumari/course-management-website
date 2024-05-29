const para=document.getElementById("para")
const arr=['url("https://th.bing.com/th/id/R.4b043128edc6ceb33fb940a30f2539ce?rik=hmF1qMicbXqBQg&riu=http%3a%2f%2fwww.thedaycollections.com%2fwp-content%2fuploads%2f2017%2f12%2fprom_dresses_fashion_5.jpg&ehk=lq5rk2iLFHK90lapKZdeLA0NRsL3RM7F2y%2bCTpK8R%2b8%3d&risl=&pid=ImgRaw&r=0")','url("https://th.bing.com/th/id/R.70f3e713f62ba59b868433f346853dce?rik=n0Y7Ygm9JS1Dcw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-c22VALZlh9Y%2fUVqht3tQdTI%2fAAAAAAAAAEU%2fJdXb11t4tE4%2fs1600%2f9564-Sapphire.jpg&ehk=C3lKinU%2fRtIc5b8BD1COe4uF%2bgsF6wArCKeNFfXUU%2bA%3d&risl=&pid=ImgRaw&r=0")','url("https://th.bing.com/th/id/R.e9f92616abccb238f189ecf69d5d0ff5?rik=XZJfTjvGq5PAuQ&riu=http%3a%2f%2fwww.dressedupgirl.com%2fwp-content%2fuploads%2f2016%2f01%2fEvening-Gowns-Silver.jpg&ehk=N03wQyjs9Zwqd%2fv0nkQ30I2aNmTYXn7LUwjZ%2f%2b1ZAeU%3d&risl=&pid=ImgRaw&r=0")','url("https://bns-fashion.com/wp-content/uploads/2020/10/Anarkali-Dress.jpg")','url("https://th.bing.com/th/id/R.d104109f5ff7f4b9acc2284e79f87282?rik=leg7%2fc7FJiUwkA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-WSxpb-jWNFQ%2fUTHBTiDE2yI%2fAAAAAAAAA9g%2fKGNwUll7uOc%2fs1600%2flatest%2bdresses7.jpg&ehk=T%2bAhSUDD1H%2f7ObNR8GyqbkIbROq1udA4rEzmGdnuZyU%3d&risl=&pid=ImgRaw&r=0")','url("https://www.isueer.com/wp-content/uploads/2018/07/blue-ball-gown-prom-dress-0833-05.jpg")','url("https://th.bing.com/th/id/OIP.HMcTz3Yw49G42voWJPpGDwHaJg?rs=1&pid=ImgDetMain")','url("https://th.bing.com/th/id/OIP.fGuCgUtRUl_f2c8buXKX7QHaLJ?rs=1&pid=ImgDetMain")','url("https://th.bing.com/th/id/R.16b64f399e9a9e7e808b4c0595b46427?rik=HJmrsDGrPMXRhA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f34100000%2fDress-dresses-34167805-1000-1500.jpg&ehk=zYUbehKqCoFv0RWzoeWQmLr%2fm67OO3%2ffLhEUQyfGv%2fc%3d&risl=&pid=ImgRaw&r=0")','url("https://dresseskhazana.com/wp-content/uploads/2017/03/Party-Wear-Gown-Dresses.jpg")','url("https://th.bing.com/th/id/R.6a2585e1ab6d230cff530b36f09792f6?rik=uGys9PtqfUT9YA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-RQq2Jd2j9X8%2fUQCdoREk0MI%2fAAAAAAAABAc%2fdNCtQZARK_s%2fs1600%2fweekly-deal-prom-dress-2012-011.jpg&ehk=c37zSawO0sWjLdHWk4iG4AQvYZlTxH3xevV1dxJn2PI%3d&risl=&pid=ImgRaw&r=0")','url("https://www.stylevore.com/wp-content/uploads/2020/03/9adfb044cfeccdc0c608686ac54cbdb7.jpg")','url("https://3.bp.blogspot.com/-awvZ4M6opnw/UXJZv7AckwI/AAAAAAAAApc/_x3FBJN5tPE/s1600/women-dress-fashion.jpg")']
function dark()
{
  para.classList.toggle("dark")
  para.style.color="dark";
}
function change()
{
    console.log("click")
    const index=Math.floor(Math.random()*arr.length)
    const img= arr[index]
    para.style.backgroundImage = img;
    para.style.height="600px"
    para.style.backgroundRepeat = "no-repeat" ;
    para.style.backgroundSize = "cover";
}