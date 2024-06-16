setInterval(()=>{

       
    document.getElementById("watch")
    document.getElementById("date")
    let hour=new Date().getHours()
    let min=new Date().getMinutes();
    let sec=new Date().getSeconds();

    let day=new Date().getDate();
    let month=new Date().getMonth()+1;
    let year=new Date().getFullYear();

console.log(`time: ${hour} ${min}  ${sec}`)

document.getElementById("h").innerHTML=`${hour} : `
document.getElementById("min").innerHTML=` ${min} : `
document.getElementById("sec").innerHTML=` ${sec}`


document.getElementById("day").innerHTML=`0${day}-`
document.getElementById("month").innerHTML=`0${month}-`
document.getElementById("year").innerHTML=`${year}`

})
