const currentTime = document.getElementById('current-time')
const currentDate = document.getElementById('current-date')

const showTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    currentTime.textContent = `${hours}:${minutes}`;

    setTimeout(showTime, 1000)
}

showTime()

const showDate = () => {
    const date = new Date();
    const months = ["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"];

    let month = months[date.getMonth()];
    let day  = date.getDate();

    currentDate.textContent = `${day}. ${month}`;
}

showDate()