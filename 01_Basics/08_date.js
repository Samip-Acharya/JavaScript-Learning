let newDate = new Date()
// console.log(newDate.toLocaleString())

let date = new Date(2025,0,10,10,45)
// console.log(date.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(date.getTime())

console.log(date.getHours())
console.log(date.toLocaleString("default",{
    weekday:"long",
    year:"2-digit", 
    month:"short",
    day:"numeric",
}))