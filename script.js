
// solution type

var interval;

function reset(current,next,interval){
    current.innerText=0;
    next.innerText=1;
    clearInterval(interval);

}


function startCounter(){
   

    var number = parseInt(document.getElementById("number").value); 

    var counter = 0;

    var current = document.querySelector(".current");
console.log(current.innerText)

var next = document.querySelector(".next");


reset( current,next,interval);

   if( isNaN(number)){
        alert("not a number");
        return;
    }

    if(number > 9 || number < 0){
        alert("Wrong Iput");
        return;
    }



    
     interval = setInterval(function() {
        if(counter >= number){
            clearInterval(interval);
            return;
        }
       
        next.classList.add("animate");
        counter++;                      
       
        setTimeout(function(){
            next.classList.remove("animate");
            current.innerText = next.innerText;
            next.innerText =parseInt(next.innerText) + 1;       
        },500);   
       
    },1000)
}


// var interval;


// function reset(current,next,interval){
// current.innerText=0;
// next.innerText=1;
// clearInterval(interval);

// }
// function startCounter() {

//     var number= parseInt(document.getElementById('up-counter')).value;
    
//     var counter = 0;
//     var current= document.querySelector('.current');
//     var next = document.querySelector('.next');



    
//     reset(current,next,interval);

// if(isNaN(number)){
//     alert('not a number');
//     return;
// }










// i did myself 
/*
var button= document.getElementById('counter-button')
button.addEventListener('click', getValue);
var showNum= document.getElementById('show');

function getValue(){
const counterNumber = document.querySelector('input').value;
console.log(counterNumber);
var showCount=0;

setInterval(function(){
    

    if(showCount==counterNumber){
       
        clearInterval();
        
        return alert('time up');
    }

        showCount++;
        showNum.innerHTML=(showCount);
        
        console.log(showCount)

},1000);




}

*/

