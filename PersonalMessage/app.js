const sendBtn= document.querySelector('#sendBtn');
const msgIn = document.querySelector("#msgIn");
const msgOut = document.querySelector("#msgOut");

sendBtn.addEventListener('click',sendMsg);

// Creating Function body
function sendMsg()
{
    // Getting msg content value
    let msgContent= msgIn.value;

     // Checking if the content is empty if yes then we display an alert to user
    //else we allow the user to input data

    if(msgContent==='')
    {
        alert("Please enter a valid Value in the message field");
    }
    else{
     // placing the msg content value in the msgOut
    
    
    msgOut.innerHTML=msgContent;
    
    // resetting the msgIn value to be null, because we want to reset it.
    msgIn.value="";
    }
    
    










 

   
    
}