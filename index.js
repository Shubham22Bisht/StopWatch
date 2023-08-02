const clock = document.querySelector(".clock");

    let sec= 0,min=0,hr=0;
    let intervalId;


const startStopwatch = () => {

    intervalId=setInterval(() => {
        if(sec<59) sec++;
        else if(min>=59){
            min=0;
            hr++;
        }
        else{
            min++;
            sec=0;
        }
        const seconds=String(sec).padStart(2,"0");
        const minutes=String(min).padStart(2,"0");
        const hours=String(hr).padStart(2,"0");
        
        clock.innerText= `${hours}:${minutes}:${seconds}`;

    }, 1000);
}
const stopStopwatch = () => {
    clearInterval(intervalId);
}
const reset=()=>{
    clearInterval(intervalId);
    sec=0;
    min=0;
    hr=0;
    clock.innerText= "00:00:00";
    
}
