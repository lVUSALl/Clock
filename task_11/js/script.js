 

setInterval(()=> {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let h_dot = document.querySelector('.h_dots');
    let m_dot = document.querySelector('.m_dots')
    let s_dot = document.querySelector('.s_dots')



    let h = new Date().getHours() + 1;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds() + 1;

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;

    hours.innerHTML = "<span>Saat:</span>" + h;
    minutes.innerHTML = "<span>Dəqiqə:</span>" + m;
    seconds.innerHTML= "<span>Saniyə:</span>" + s;

    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    h_dot.style.transform = `rotate(${h * 15}deg)`;
    m_dot.style.transform = `rotate(${m * 6}deg)`;
    s_dot.style.transform = `rotate(${s * 6}deg)`;
})
 

var a;
function show() {
    if(a==1) {
        document.getElementById("time").style.display="flex";
        return a = 0;
    }
    else {
        document.getElementById("time").style.display="flex";
        return a = 1;
    }
}

function hide() {
    if(a==1) {
        document.getElementById("time").style.display="none";
        return a = 0;
    }
}

// function not() {
//     if( !document.querySelector(e.target).getElementById('time')){
//         alert('Toxunmaq Olmaz');
//     }
//     // alert("Toxunmaq Qəti Qadağandır !")
// }

