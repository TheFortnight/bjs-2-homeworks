class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(actionTime, actionFunc, actionId) {
        if (typeof actionId === 'undefined') {
            console.log("here's the problem");
            throw new Error('error text');
        } else if (this.alarmCollection.some((el) => el.id === actionId)) {
            console.error("this id already exists");
            return;
        } else {
            this.alarmCollection.push(
                {
                id: actionId,
                time: actionTime,
                callback: actionFunc
            });
        }
    }
    removeClock(actionId) {
        let arr = this.alarmCollection;
        let index;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === actionId) {
                index = i;
            }
        }
        if (index === "undefined") {
            return false;
        } else {
            this.alarmCollection.splice(index, 1);
            return true;
        }
    }
    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours();
        if(hours < 10){
            hours = ("0"+hours);
        }
        let minutes = date.getMinutes();
        if(minutes < 10){
            minutes = ("0"+minutes);
        }
        return `${hours}:${minutes}`
    }
    start() {
        function checkClock(arg, scope) {
            scope = typeof scope === null? this : scope;
            let findTime = this.getCurrentFormattedTime.bind(scope);
            let now = findTime();
            if (arg.time === now) {
                arg.callback();
            }
        }
        if(this.timerId === null){
            console.log("Id is null");
            this.timerId = setInterval((scope) => {
                this.alarmCollection.forEach(al => checkClock(al, scope));
            }, 2000);
        }
    }
    stop(){
        if(this.timerId !== "undefined"){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms(){
        this.alarmCollection.forEach(el => console.log(`${el.id}, ${el.time}`))
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}

// Task 2
function testCase(){
let alarm = new AlarmClock();
let curTime = alarm.getCurrentFormattedTime(alarm);
function signal(){
    console.log("alarm is on now");
}
alarm.addClock(curTime, signal, 5000);
alarm.start();
setTimeout(() => clearInterval(alarm.timerId), 10000);
}