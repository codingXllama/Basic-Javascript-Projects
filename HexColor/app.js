/// ++++ SELECTING ALL THE ELEMENTS WE NEED TO WORK WITH


// creating hex number array
const hexNumbers =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// storing the btn class so we can use it
const hexBtn = document.querySelector('.hexBtn');
// storing the body of the html so we can use it
const bodyBG_Color= document.querySelector('body');
const hexResult = document.querySelector('.hexResult');


// +++ CREATING EVENT LISTENERS FOR THE SELECTORS

hexBtn.addEventListener('click',

function getHexValue()
{
    let hexColor ='#';

    // creating for loop to get the first possible hex color value
    
    for(let i=0;i<6;i++)
    {
        // Generating randomIndex
        let randomIndex= Math.floor(Math.random()*hexNumbers.length);
        // Storing random hexNumber into the hexColor string variable
        // document.writeln("the random number is: ",randomIndex)
        hexColor+=hexNumbers[randomIndex];
        // document.writeln(hexColor);


    }
    hexResult.innerHTML='<h1>'+hexColor+'</h1>';
    
    BG_ColorChanger(hexColor);

});

function BG_ColorChanger(possibleColorCode)
{
    bodyBG_Color.style.backgroundColor=possibleColorCode;
    
}