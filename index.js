// Remember to import the data and Dog class!

import dogs from './data.js'
import Tindog from './Dog.js'
let currentDogIndex = 0
let currentTindog = new Tindog(dogs[currentDogIndex]);

function getNewDog() {
    currentDogIndex += 1
    if(currentDogIndex <= 2){
         currentTindog = new Tindog(dogs[currentDogIndex])
         render()
    } else{
         document.getElementById('containerImage').innerHTML = `    
         <div>
            <h1> Oops ! There are no more dogs left to view .</h1>
        </div>`
    }
}

function hasBeenLiked() {
   
    currentTindog.setMatchStatus(true)
    document.getElementById('badge-Heart').style.display = 'block'
    setTimeout(()=>{
        document.getElementById('badge-Heart').style.display = 'none'
      getNewDog()  
    }, 1500)
     
}
function hasBeenSwiped() {
    currentTindog.setMatchStatus(true)
     document.getElementById('badge-Cross').style.display = 'block'
    setTimeout(()=>{
         document.getElementById('badge-Cross').style.display = 'none'
         getNewDog()},1500)
}

function render() {
    document.getElementById('containerImage').innerHTML = currentTindog.getDogHtml()
}
render();
document.getElementById('cross').addEventListener('click' , hasBeenSwiped )
document.getElementById('heart').addEventListener('click' , hasBeenLiked )
