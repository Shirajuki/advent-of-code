import fs from 'fs'
let c='charCodeAt',x=0,y=0
fs.readFileSync("input",{encoding:"utf8"}).split`\n`.map(b=>[b[c](0)-64,b[c](2)-87]).slice(0,-1).map(c=>{let a=c[0],b=c[1];x+=(a==b?3:b-a%3==1?6:0)+b;y+=((a+b)%3)+1+(b-1)*3})
console.log(x,y)
