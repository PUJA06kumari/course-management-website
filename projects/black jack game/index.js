let player = {
    name : "puja Kumari",
    chips : 120
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

function getrandomcard()
{
    let randomnumber = Math.floor(Math.random()*13) + 1 
    if(randomnumber===1)
    {
        return 11
    }
    else if(randomnumber > 10)
    {
        return 10
    }
    else
    {
        return randomnumber
    }
}

function startgame()
{
    isAlive = true;
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard;
    rendergame()
}
function rendergame()
{
    sumEl.textContent = "sum :" + sum;
    cardsEl.textContent = "cards : "
    for(let i=0; i<cards.length; i += 1)
    {
        cardsEl.textContent += cards[i] + " "
    }
    if(sum <=20)
    {
        message = "Do you want to draw a new card ? 😊"
    }
    else if(sum === 21)
    {
        message = "Wohoo! You have got blackjack! 🥳"
        hasBlackJack = true;
    }
    else
    {
       message = "You're out of the game! 😭"
       isAlive = false;
    }
    messageEl.textContent= message;
}

function newcard()
{
    if (hasBlackJack === false && isAlive === true)
    { 
        let card = getrandomcard();
        sum += card;
        cards.push(card)
        console.log(cards)
        rendergame();
    }
}

