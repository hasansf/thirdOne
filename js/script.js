// function updateClock() {
//     let clock = document.querySelector('.clock');
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let timeString = hours + ':' + minutes + ':' + seconds;
//     clock.innerHTML = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
  
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }
  
    if(hrs > 12){
        hrs = hrs - 12;
    }
  
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
  }
  setInterval(displayTime, 1000);