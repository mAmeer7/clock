// USING SELECTORS

let hour= document.querySelector('#hour');
let min = document.querySelector('#minutes');
let sec = document.querySelector('#second');
let ampm = document.querySelector('#ampm');

// FUNCTION FOR TIME SHOWING

let updateClock=()=>{
    let h = new Date().getHours(); 
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = 'AM';
    
    //Perfect logic by me. 
    if (h >= 12) {
        if(h == 12){
            h=12
            am_pm = "PM";
        
        }else{
            h -= 12;
        am_pm = "PM";
        }
    }
    else if (h == 0) {
        h = 12;
        am_pm = "AM";
    }
   

   h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    ampm.innerText= am_pm;

setTimeout(function(){updateClock()},1000)
}

updateClock();