const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin ,
    output: process.stdout
});

class Clock {
    constructor(){
        this.date = new Date();
        this.hh = this.date.getHours();
        this.mm = this.date.getMinutes();
        this.ss = this.date.getSeconds();
        this._tick()
    }


    printTime(){
        let time = `${this.hh}:${this.mm}:${this.ss}`
        console.log(time)
        this.ss ++ 

        if(this.ss === 60){
            this.mm ++
            this.ss = 0
        }

        if(this.mm === 60){
            this.hh ++
            this.mm = 0
        }

        if(this.hh === 24){
            this.hh = 0
            this.ss = 0
            this.mm = 0
        }        
    }

    _tick(){
        setInterval(this.printTime.bind(this),1000)   
    }
}

const clock = new Clock();
 