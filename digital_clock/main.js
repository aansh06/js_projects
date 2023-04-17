function clock(){
    var today=new Date();
    var hour = today.getHours();
    var minutes= today.getMinutes();
    var seconds=today.getSeconds();
    let period="AM";


        // period
    if(hour>=12) {
        period="PM";
    }

    // 12 hr clock setting
    hour= hour>12? hour%12 : hour;

    // adding 0 if the value is less than 10
    if(hour<10) hour="0"+hour;
    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds="0"+seconds;

    document.querySelector(".hour").innerHTML=hour;
    document.querySelector(".minutes").innerHTML=minutes;
    document.querySelector(".seconds").innerHTML=seconds;
    document.querySelector(".period").innerHTML=period;
}

var updateClock = setInterval(clock,1000);


const today= new Date();
const dayNumber=today.getDate();
const year=today.getFullYear();
const dayName=today.toLocaleString("default",{weekday:"long"});
const monthName=today.toLocaleString("default",{month:"short"});

document.querySelector(".month-name").innerHTML=monthName;
document.querySelector(".day-name").innerHTML=dayName;
document.querySelector(".day-number").innerHTML=dayNumber;
document.querySelector(".year").innerHTML=year;