var guess=document.getElementById("guess")
var result=document.getElementById("result")
var random=Math.floor(Math.random()*100+1)
var Att=document.getElementById("Attempt")
var button=document.getElementById("button")
let count=0
var dec=1
console.log(random)

function check()
{
   
    var a=guess.value
    if(dec==1){
        count++
       
        if(a==random)
        {
         
         result.textContent="Guess is right!You won!!"  
         Att.textContent="Attempt:"+count
         dec=0
         button.textContent="Reset"
        }
        else if(a>random)
        {
            
            result.textContent="Guess is higher!" 
           
            Att.textContent="Attempt:"+count

        }
        else if(a<random)
        {
           
            result.textContent="Guess is lower!"
            
            Att.textContent="Attempt:"+count
        }
    }
    else{
        reset()
        dec=1

    }
}
function reset(){
    button.textContent="check"
    random=Math.floor(Math.random()*100+1)
    count=0
    Att.textContent="Attempt:"+count
    guess=document.getElementById("guess")
    guess.value=null
    result=document.getElementById("result")
    result.textContent="Right/Wrong"
    console.log(random)
        

    
}