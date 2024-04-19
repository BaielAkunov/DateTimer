
let time =() => {
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let weekDays =date.getDay()

    if(hours<10)hours='0'+hours
    if(minutes<10)minutes='0'+minutes
    if(seconds<10)seconds='0'+seconds
    

    let week = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    let month_num= ['January','February','March','April','May','June','July','August','September','October','November','December']

    let date_timer = month_num[month] + ' '+ day+' | '+ hours + ':'+minutes+':'+seconds + ' | '+ week[weekDays]
    setTimeout(()=>{
        time()
    }, 1000);
    // console.log(date_timer)

    let tag =document.getElementById('time_text').innerHTML=date_timer
}
time()

