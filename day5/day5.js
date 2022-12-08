import fs from 'fs'
let [d, m]=fs.readFileSync("input",{encoding:"utf8"}).split`\n\n`
let s=Array.from(Array(9), ()=>[]) // stack
d=d.split`\n`.forEach(a=>[...a].forEach((c,i)=>/[A-Z]/.test(c) && s[Math.ceil((i+1)/4)-1].unshift(c))) // parse stack
let z=JSON.parse(JSON.stringify(s)) // Make copy of stack
m=m.split`\n`.map(c=>c.split` `.reduce((a,e,i)=>i%2==1?[...a,+e]:a,[])).slice(0,-1) // parsed rearrangement
m.forEach(([a,b,c])=>{s[c-1]=s[c-1].concat(s[b-1].splice(s[b-1].length-a,a).reverse());z[c-1]=z[c-1].concat(z[b-1].splice(z[b-1].length-a,a))}) // execute rearrangement
console.log(s.map(c=>c[c.length-1]).join``)
console.log(z.map(c=>c[c.length-1]).join``)
