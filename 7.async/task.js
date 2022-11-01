class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(actionTime, actionFunc, actionId) {
        if (typeof actionId === 'undefined') {
            throw new Error('error text');
        } else if (this.alarmCollection.some((el) => el.id === actionId)) {
            console.error("this id already exists");
            return;
        }
        this.alarmCollection.push({
            id: actionId,
            time: actionTime,
            callback: actionFunc
        });

    }
    removeClock(actionId) {
        let arr = this.alarmCollection;
        let arrLength = arr.length;
        this.alarmCollection = arr.filter(el => el.id !== actionId);
        return arrLength > this.alarmCollection.length;
    }
    getCurrentFormattedTime() { 
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    start() {

        let getTime = this.getCurrentFormattedTime;
        let checkClock = (arg) => {

            let now = getTime();
            if (arg.time === now) {
                arg.callback();
            }
        };
        // checkClock = checkClock.bind(this); // все равно до конца не понимаю, в какой области видимости нужно добавлять это выражение, если использховать не стрелочную функцию? В гобальной?

        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(al => checkClock(al)), 1000);
        }

    }
    stop() {
        if (this.timerId !== null) {
            console.log("stop alarm");
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(el => console.log(`${el.id}, ${el.time}`))
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}

// Task 2
function testCase1() {
    let alarm = new AlarmClock();
    let curTime = alarm.getCurrentFormattedTime();

    function signal() {
        console.log("alarm is on now");
    }
    alarm.addClock(curTime, signal, 5000);
    alarm.start();
    setTimeout(() => clearInterval(alarm.timerId), 5000);
}

function testCase2() {
    let alarm = new AlarmClock();

    function curTimePlusMinute() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = ("0" + hours);
        }
        let minutes = date.getMinutes() + 1;
        if (minutes < 10) {
            minutes = ("0" + minutes);
        }
        return `${hours}:${minutes}`
    }
    let delayedAlarm = curTimePlusMinute();
    console.log("delayed time is " + delayedAlarm);

    function signal() {
        console.log("Delayed alarm is on now");
    }
    alarm.addClock(delayedAlarm, signal, 5000);
    alarm.start();
    alarm.printAlarms();
    setTimeout(() => alarm.stop(), 60000);

}

testCase1();
setTimeout(() => {
    console.log("Running test2");
    testCase2();
}, 10000);