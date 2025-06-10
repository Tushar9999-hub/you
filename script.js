const bubbleContainer = document.querySelector('.bubble_container')
const timeDisplay = document.getElementById('timer')
const targetDisplay = document.getElementById('target')
const scoreDisplay  = document.getElementById('score')
const originalTimeiming= 4;

let leftTime = 10;
let score =0;
let bubbleCount = 100;

function createBubble (){
     bubbleContainer.innerHTML=''
    for (let i=1; i<=bubbleCount; i++){
       
         const bubble = document.createElement('div')    //call by div on bubble_container
        bubble.classList.add("bubble")  // adding by class on bubble 
        bubble.textContent = Math.floor(Math.random()*10) // text content // (Math.random)thay give random num , (Math.floor) down side num 10 like 9,8,7,4,5,6,0,3
        bubbleContainer.appendChild(bubble)
        

    }
}

function generateTarget(){
    const target = Math.floor(Math.random()*10)
        targetDisplay.textContent = target;
    }

    function startTimer(){ //timer set on js 
       const timefun = setInterval(()=>{
           console.log(leftTime)
           timeDisplay.textContent = leftTime
            leftTime--;              //  leftTime can stop the number === 0  and leftTime++ can after thr 10 taking number
             if(leftTime === 0){      
                clearInterval(timefun);     // clear interval is clear the num or char
               

                bubbleContainer.innerHTML =
                `  <div class="afterG">
                 <div class="game_over"><h1>Game Over..</h1> </div>
                  <div class="score"><h3>Score : ${score}</h3></div>
                <button class="btn" onclick="restartGame()">Restart</button>
                </div>`
             }
        },1000)
   }

    function startGame(){
      createBubble();
      generateTarget();
      startTimer();  
    }

   function restartGame(){
        leftTime =originalTimeiming;
        score = 0;
        timeDisplay.textContent = leftTime;
        scoreDisplay.textContent = 0;
        startGame
   }

  
createBubble();
generateTarget();
startTimer();
