const bodyElement = document.querySelector('body');
const currentTime = document.getElementById('current-time')
const currentDate = document.getElementById('current-date')
const timeOfDayContainer = document.getElementById('time-of-day')
const weekDayContainer = document.getElementById('weekday')

const showTime = () => {
    const d = new Date();
    const days = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];
    const months = ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"];


    let hours = d.getHours();
    let minutes = d.getMinutes();

    let timeOfDay =
        hours >= 5 && hours < 9 ? "Morning"
            : hours >= 9 && hours < 12 ? "Formiddag"
                :  hours >= 12 && hours < 18 ? "Ettermiddag"
                    : hours >= 18 && hours < 23 ? "Kveld"
                        : "Natt"

    if (timeOfDay === "Natt" || timeOfDay === "Kveld") {
        bodyElement.classList.remove('day-theme')
        bodyElement.classList.add('night-theme')
    } 
    
    if (timeOfDay === "Morning" || timeOfDay === "Formiddag" || timeOfDay === "Ettermiddag") {
        bodyElement.classList.remove('night-theme')
        bodyElement.classList.add('day-theme')
    }
    

    let month = months[d.getMonth()];
    let date  = d.getDate();
    let year = d.getFullYear();

    weekDayContainer.textContent = days[d.getDay()]
    timeOfDayContainer.textContent = timeOfDay
    currentDate.textContent = `${date}.${month} ${year}`;
    currentTime.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;

    setTimeout(showTime, 1000)
}

showTime()
