let display = document.getElementById("clock");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunnning = false;

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000*60*60));
    let minutes = Math.floor(elapsedTime / (1000*60)%60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function start(){
    if(!isRunnning){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(update,10); 
        isRunnning = true;
    }
}

function stop(){
    if(isRunnning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunnning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunnning = false;
    display.textContent = "00:00:00:00";
}

