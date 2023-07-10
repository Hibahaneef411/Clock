

function clockTime(){
  let date=new Date()
// first create hour
let hour=date.getHours()
// create minute
let minute=date.getMinutes()
let second=date.getSeconds()

 clock.innerHTML=`${hour}:${minute}:${second}`
 setTimeout(()=>{clockTime()},1000)
}

clockTime()

