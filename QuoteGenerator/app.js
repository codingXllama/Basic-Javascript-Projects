const possibleQuotes =[
    // Creating an array of possible quotes which contain objects of quotes.
    //Each object includes a name and quote
    {
        author:'author 1',
        quote:'quote 1'
    },
    {
        author:'author 2',
        quote:'quote 2'
    },
    {
        author:'author 3',
        quote:'quote 3'
    }
]


const possibleBackground=[
    
]

// Creating variables to target required elements

const quoteBtn= document.querySelector('#quoteBtn');
const quoteToDisplay = document.querySelector('#quote');
const quoteAuthor= document.querySelector('#quoteAuthor');


// Creating Event Listeners
quoteBtn.addEventListener('click',function DisplayQuote()
{
    var randomIndex=Math.floor(Math.random()*possibleQuotes.length);
    // getting a random author from the possibleQuotes Object Array
    quoteAuthor.innerHTML= possibleQuotes[randomIndex].author;

    // getting a random quote from the possibleQuotes Object Array
    quoteToDisplay.innerHTML=possibleQuotes[randomIndex].quote;

});

