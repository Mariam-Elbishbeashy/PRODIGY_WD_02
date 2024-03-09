window.onload = function(){
    let minutes = 0;
    let seconds = 0; 
    let tens = 0;
    let laps = 1; 
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let appendLaps = document.querySelector('.laps')

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let resetLapBtn = document.querySelector('#resetLap');
    let restartBtn = document.querySelector('#restart');
    let lapBtn = document.querySelector('#lap');

    let Interval;
    let lapInterval;

    const startTimer = () =>{
        tens++;
        if(tens <= 9){
            appendTens.innerHTML ='0' + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    };

    const lapTimer = () => {
        let lapTime = `${appendMinutes.innerHTML}:${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
        let lapItem = document.createElement('li');
        lapItem.innerHTML = `Lap ${laps}: ${lapTime}`;
        appendLaps.appendChild(lapItem);
        laps++;
    };

    startBtn.onclick =() =>{
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);

        clearInterval(lapInterval);
        lapInterval = setInterval(lapTimer, 60000); 
    };

    stopBtn.onclick =() =>{
        clearInterval(Interval);
        clearInterval(lapInterval);
    };

    resetBtn.onclick = () =>{
        clearInterval(Interval);
        clearInterval(lapInterval);
        tens= '00';
        seconds='00';
        minutes='00';
        laps = 1;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        appendLaps.innerHTML = '';
    }

    restartBtn.onclick = () =>{
        clearInterval(Interval);
        clearInterval(lapInterval);
        tens= '00';
        seconds='00';
        minutes='00';
        laps = 1;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        appendLaps.innerHTML = '';
        Interval = setInterval(startTimer, 10);
        lapInterval = setInterval(lapTimer, 60000); 
    }

    lapBtn.onclick = () =>{
        lapTimer();
    };

    resetLapBtn.onclick = () =>{
        laps = 1;
        appendLaps.innerHTML = ''; 
    };
};
