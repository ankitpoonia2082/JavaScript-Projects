
let time = document.getElementById('time');
let date = document.getElementById('date');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let flag = 0;

const TimePrinting = () => {
    // current time
    const da = new Date();
    // getting hour , mins and seconds *********
    let currentHour = String(da.getHours()).padStart(2, '0');
    let currentMin = String(da.getMinutes()).padStart(2, '0');
    let currentSec = String(da.getSeconds()).padStart(2, '0');

    // This will display the time as HH-MM-SS 
    let currentTime = `${currentHour} : ${currentMin} : ${currentSec}`;
    time.innerHTML = currentTime;

    // current date 
    const da1 = new Date();


    let currentDay = String(da1.getDate()).padStart(2, '0');
    let currentMonth = String(da1.getMonth() + 1).padStart(2, "0");
    let currentYear = da1.getFullYear();

    // This will display the date as DD-MM-YYYY 
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    date.innerHTML = currentDate;

}

let Hour = 0;
let Min = 0;
let Sec = 0;
let milSec = 0;

const resetTimer = `${Hour} : ${Min} : ${Sec} : ${milSec}`;
let stopWatch;
// ****************** Stopwatch  ********************
// Creating Start Event on start Button
start.addEventListener('click', () => {
    if (flag === 0) {

        flag = 1;
        // Logic to start and stop timer
        stopWatch = setInterval(() => {
            console.log(Hour + ":" + Min + ":" + Sec + ":" + milSec);
            // Milliseconds *******

            milSec += 1;
            if (milSec == 60) {
                Sec += 1;
                milSec = 0;

                // Seconds *********
                if (Sec == 60) {
                    Sec = 0;
                    Min += 1;

                    // Hour *************
                    if (Min == 60) {
                        Hour += 1;
                        Min = 0;

                    }
                }
            }

            let currentTime = `${Hour} : ${Min} : ${Sec} : ${milSec}`;
            stop.innerHTML = currentTime;
        }, 1)
    }
    else {
        flag = 0;
        clearInterval(stopWatch)

    }
})
let zeroTime = `${Hour} : ${Min} : ${Sec} : ${milSec}`;
stop.innerHTML = zeroTime;

// reset Button Event
function reset() {
    clearInterval(stopWatch)
    stop.innerHTML = resetTimer;
    console.log(stop.innerHTML);

}

function clock() {
    TimePrinting();

    //Time Interval
    setInterval(TimePrinting, 1000);

}

clock()