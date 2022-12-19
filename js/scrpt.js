'use strict'

function displayTime(){
    let weekDay = document.querySelector('.weekDay');
    let day = document.querySelector('.day');
    let month = document.querySelector('.month');
    let year = document.querySelector('.year');
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let session = document.querySelector('.session');
    
    let days = ['Sunday', 'Monday','Tuesday','Thursday','Friday','Saturday']
    let months = ['January', 'February','March','April','May','June','July', 'August','September','October','November','December']
    
    function addZero(t){
        if (t<10){return '0' + t}
        else return t
    }
    const time = new Date()
    let dayPresent = days[time.getDay()]
    let datePresent = addZero(time.getDate())
    let monthPresent = months[time.getMonth()]
    let yearPresent = time.getFullYear()
    let hoursPresent = addZero(time.getHours());
    let minutesPresent = addZero(time.getMinutes());
    let secondsPresent = addZero(time.getSeconds());
    
    
    if (hoursPresent > 12 && hoursPresent < 22){
        hoursPresent = "0" + (hoursPresent - 12)
    }
    if (hoursPresent > 21){
        hoursPresent = hoursPresent - 12
    } 
    if (time.getHours() > 12){
        session.innerHTML = `pm`
    }else { session.innerHTML = `am`}  

    let selectorArr =[weekDay,day,month,year,hours,minutes,seconds]
    let dateArr = [dayPresent,datePresent,monthPresent,yearPresent,hoursPresent,minutesPresent,secondsPresent]
    
    function putTime(arr1,arr2){
        for(let i = 0; i<arr1.length; i++){
            arr1[i].innerHTML = `${arr2[i]}`
        }
    }
    
    return putTime(selectorArr,dateArr);
}

setInterval(displayTime,100)








