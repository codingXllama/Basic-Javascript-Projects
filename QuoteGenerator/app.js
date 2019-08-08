const possibleQuotes =[
    // Creating an array of possible quotes which contain objects of quotes.
    //Each object includes a name and quote
    {
        author:'Dr. Seuss',
        quote:'“Don\'t cry because it\'s over, smile because it happened.” '
    },
    {
        author:'Marilyn Monroe',
        quote:'“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.” '
    },
    {
        quote:'“A room without books is like a body without a soul.” ',
        author:'Marcus Tullius Cicero'
    }
]


const possibleBackground=[
    'url(Imgs/BackgroundImages/bg1.jpg)','url(Imgs/BackgroundImages/bg2.jpg)','url(Imgs/BackgroundImages/bg3.jpg)'
       
]

// Creating variables to target required elements

const quoteBtn= document.querySelector('#quoteBtn');
const quoteToDisplay = document.querySelector('#quote');
const quoteAuthor= document.querySelector('#quoteAuthor');
const bgChangerBtn=document.querySelector('#bgBtn');
const appBody= document.querySelector('body');

// Creating Event Listeners
quoteBtn.addEventListener('click',function DisplayQuote()
{
    var randomIndex=Math.floor(Math.random()*possibleQuotes.length);
    // getting a random author from the possibleQuotes Object Array
    quoteAuthor.innerHTML= '―'+possibleQuotes[randomIndex].author;

    // getting a random quote from the possibleQuotes Object Array
    quoteToDisplay.innerHTML=possibleQuotes[randomIndex].quote;
});


bgChangerBtn.addEventListener('click',function()
{   
    // appBody.style.backgroundImage=`url(possibleBackground[Math.floor(Math.random()*possibleBackground.length)])`;
    var randomIndex=Math.floor(Math.random()*possibleBackground.length);
    appBody.style.backgroundImage=possibleBackground[randomIndex];
});

