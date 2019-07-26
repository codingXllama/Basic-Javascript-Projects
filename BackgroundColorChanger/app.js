// Creating variables to store the html elements
const colorBtn1 = document.querySelector('.colorBtn1');
const colorBtn2 = document.querySelector('.colorBtn2');
const colorBtn3 = document.querySelector('.colorBtn3');
const bodyBackGround= document.querySelector('body');


// Creating an array of possible background color
const possibleColors=['yellow','red','green','#3b5998','purple']


// Creating a Btn event listener to do something when btn is clicked
colorBtn1.addEventListener('click',function()
{
bodyBackGround.style.backgroundColor="red";
})


colorBtn2.addEventListener('click',randomColor = function()
{
    bodyBackGround.style.backgroundColor=possibleColors[Math.floor(Math.random()*possibleColors.length)];
});
colorBtn3.addEventListener('click',function()
{
    bodyBackGround.style.backgroundColor='blue';
});







// Creating Function Body for creating random color
function changeColor()
{
    // bodyBackGround.style.backgroundColor="red";
    // if (changeColor.arguments[0]===0)
    // {
    //     colorBtn1.style.color="red";
    //     bodyBackGround.style.backgroundColor='red';
    // }
    // else if(changeColor.arguments[1]===1)
    // {
    //      // changing the background color to a random index of the possible color list
    //     bodyBackGround.style.backgroundColor=possibleColors[Math.floor(Math.random()*possibleColors.length)];
    // }
    // else if (changeColor.arguments[2]===2)
    // {
    //     bodyBackGround.style.backgroundColor='blue';
    // }

    // Uncomment the following to generate a random number and attach this function to any event listener variable
    bodyBackGround.style.backgroundColor=possibleColors[Math.floor(Math.random()*possibleColors.length)];

   
}