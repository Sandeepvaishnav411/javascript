// part1
let human = new Date();
let ani =(human.getFullYear())
let mni = (human.getMonth())
let sni =(human.getDate()) 
let dni =(human.getHours())
let kni =(human.getMinutes())
console.log(`${ani}-${mni}-${sni} ${dni}:${kni}`)

// part2
let x = new Date();
console.log(`${x.getDate()}-${x.getMonth()}-${x.getFullYear()} ${x.getHours()}:${x.getMinutes()}`)

// part 3
console.log(`${x.getDate()}/${x.getMonth()}/${x.getFullYear()} ${x.getHours()}:${x.getMinutes()}`)

