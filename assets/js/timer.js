// let dt = new Date(new Date().setTime(0));
// let ctime = dt.getTime();
let timeOfEachQuestion = 10;
let seconds = timeOfEachQuestion;
let secondsLeft = 0;
let minutes =0 ;
let formatted_sec;

let mytime = setInterval(function(){
    //if seconds are more than 60 i.e minutes
    
    if(seconds === 1){
        // quiz completed
        seconds = timeOfEachQuestion;
        next();
        console.log("submit quiz")
        return;
    }
    seconds--;
    secondsToTakeAnswers = timeOfEachQuestion-(secondsLeft-1);
            
        if(seconds>59){
            secondsLeft= seconds%60 ;
            minutes= Math.floor(seconds/60) ;
        }else {
                // if seconds are less the 60
                
                secondsLeft = seconds;
                if(minutes>= 1){
                    minutes--;
                }
            }
            formatted_sec =  `${minutes}M : ${secondsLeft}s`;
            // This variable is in site.js
            console.log(secondsToTakeAnswers);
            // This variable is in site.js
            
        document.querySelector("span.time").innerHTML = ` ${formatted_sec}`;
    }, 1000);  

    function nextOrSubmitQuestion() {
        // clearInterval(mytime);
        // document.getElementsByClassName('btn-next')[0].click();
        // secondsToTakeAnswers = timeOfEachQuestion-(secondsLeft-1);
        // next();

        // seconds = timeOfEachQuestion;
    }