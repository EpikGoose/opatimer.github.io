var ends = [543, 547, 600, 610, 614, 662, 666, 714, 718, 766, 796, 800, 848, 852, 900];
var endsFriday = [528, 532, 570, 574, 607, 617, 621, 654, 658, 691, 695, 728, 732, 765];
var pernames = ["Period 1", "Passing period", "Period 2", "Snack", "Passing period", "Period 3", "Passing period", "Period 4", "Passing period", "Period 5", "Lunch", "Passing period", "Period 6", "Passing period", "Period 7"];
var pernamesFriday = ["Period 1", "Passing period", "Period 2", "Passing period", "Period 3", "Snack", "Passing period", "Period 4", "Passing period", "Period 5", "Passing period", "Period 6", "Passing period", "Period 7"];
var per = 1;

var debug = [false]

var timer = document.getElementById("timer");
var nextper = document.getElementById("nextper");   
var periodsHTML = document.getElementById("periods")

var periods = ["Period 1: 8:15 - 9:03<br>Period 2: 9:07 - 10:00<br>Snack: 10:00 - 10:10<br>Period 3: 10:14 - 11:02<br>Period 4: 11:06 - 11:54<br>Period 5: 11:58 - 12:46<br>Lunch: 12:46 - 1:16<br>Period 6: 1:20 - 2:08<br>Period 7: 2:12 - 3:00",
"Period 1: 8:15 - 8:48<br>Period 2: 8:52 - 9:30<br>Period 3: 9:34 - 10:07<br>Snack: 10:07 - 10:17<br>Period 4: 10:21 - 10:54<br>Period 5: 10:58 - 11:31<br>Period 6: 11:35 - 12:08<br>Period 7: 12:12 - 12:45"]

var s, m, h, ampm;
var time, d;
d = new Date();

function draw() {
    per = 1;
    d = new Date();

    if (debug[0] != true) {
        dotw = d.getDay();
        s = d.getSeconds();
        m = d.getMinutes();
        h = d.getHours();
    } else {
        dotw = debug[1];
        h = debug[2];
        m = debug[3];
        s = debug[4];
    }

    ampm = "AM";
    if (dotw >= 1 && dotw <= 4) {
        for (var p of ends) {
            if (m + (h*60) >= p) {
                per += 1;
            }
        }

        if (per <= 15) {
            timeleft = ends[per-1] - (m + (h * 60))
        }

        if (s <= 9) {
            s = "0" + s;
        }
        if (m <= 9) {
            m = "0" + m;
        }
        if (h >= 13) {
            h -= 12;
            ampm = "PM";
        }
        periodsHTML.innerHTML = periods[0];
        time = h + ":" + m + ":" + s + " " + ampm;
        timer.innerHTML = time;

        if (debug[0] != true) {
            dotw = d.getDay();
            s = d.getSeconds();
            m = d.getMinutes();
            h = d.getHours();
        } else {
            dotw = debug[1];
            h = debug[2];
            m = debug[3];
            s = debug[4];
        }

        if (h >= 15) {
            nextper.innerHTML = "School has ended";
        } else {
            if (timeleft == 1) {
                nextper.innerHTML = pernames[per-1] + " ends in " + timeleft + " minute";
            } else {
                nextper.innerHTML = pernames[per-1] + " ends in " + timeleft + " minutes";
            }
        }
    } else if (dotw == 5) {
        for (var p of endsFriday) {
            if (m + (h*60) >= p) {
                per += 1;
            }
        }

        if (per <= 14) {
            timeleft = endsFriday[per-1] - (m + (h * 60))
        }

        if (s <= 9) {
            s = "0" + s;
        }
        if (m <= 9) {
            m = "0" + m;
        }
        if (h >= 13) {
            h -= 12;
            ampm = "PM";
        }
        periodsHTML.innerHTML = periods[1];
        time = h + ":" + m + ":" + s + " " + ampm;
        timer.innerHTML = time;

        if (debug[0] != true) {
            dotw = d.getDay();
            s = d.getSeconds();
            m = d.getMinutes();
            h = d.getHours();
        } else {
            dotw = debug[1];
            h = debug[2];
            m = debug[3];
            s = debug[4];
        }

        if ((h * 60) + m >= 765) {
            nextper.innerHTML = "School has ended";
        } else {
            if (timeleft == 1) {
                nextper.innerHTML = pernamesFriday[per-1] + " ends in " + timeleft + " minute";
            } else {
                nextper.innerHTML = pernamesFriday[per-1] + " ends in " + timeleft + " minutes";
            }
        }
    } else {
        periodsHTML.innerHTML = "It's the weekend, Hurray!"
        nextper.innerHTML = "Time:";

        if (s <= 9) {
            s = "0" + s;
        }
        if (m <= 9) {
            m = "0" + m;
        }
        if (h >= 13) {
            h -= 12;
            ampm = "PM";
        }
        time = h + ":" + m + ":" + s + " " + ampm;
        timer.innerHTML = time;
    }
}

draw();
setInterval(draw, 100);