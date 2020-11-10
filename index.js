setInterval(()=>{
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotation = 30*htime+mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;
// ye bas center se rotate karayega
hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
second.style.transform = `rotate(${srotation}deg)`;
// agar body ke center se rotate krana hai toh transform property ko origin se set karo css mein
}, 1000);