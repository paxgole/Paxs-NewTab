function getTime(dateObj)
{
    hours = dateObj.getHours();
    mins = dateObj.getMinutes();
    secs = dateObj.getSeconds();

    time = hours + " : " + mins + " : " + secs;

    return time;
}

function getDate(dateObj)
{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let weekday = days[dateObj.getDay()];
    let month = monthList[dateObj.getMonth()];
    year = dateObj.getFullYear();
    datenum = dateObj.getDate();
    date = weekday + ", " + datenum + " " + month + " " + year;

    return date;
}

function refresh()
{
    var dateObj = new Date();
    var time = getTime(dateObj);
    var date = getDate(dateObj);
    var rate = 1000;

    document.getElementById("Time").innerText = time;
    document.getElementById("Time").textContent = time;

    document.getElementById("Date").innerText = date;
    document.getElementById("Date").textContent = date;
    
    setTimeout(refresh, rate);
}

refresh();