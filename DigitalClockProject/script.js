var greeting = document.getElementById('greeting')


function showTime() {
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var todaydate = d.toDateString();
    // This if-else for PM and AM
    var session;
    if (h >= 12) {
        session = "PM";
    } else {
        session = "AM";
    }

    if (h < 12) {
        document.body.style.backgroundImage = 'url("morning.jpg")';
        greeting.innerHTML = "Good Morning";
    } else if (h < 18) {
        document.body.style.backgroundImage = 'url("afternoon.png")';
        greeting.innerHTML = "Good Afternoon";
    } else {
        document.body.style.backgroundImage = 'url("night.jpg")';
        greeting.innerHTML = "Good Evening";
    }

    // hour jo hai 10 se chota hai to hour ke sath 0 add krna hai 0+h nhi hai to as it is
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + " : " + m + " : " + s + " " + session; // format created
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = todaydate;

    setTimeout(showTime, 1000); // khud hi refresh hoga page
}