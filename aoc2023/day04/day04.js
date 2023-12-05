// Part 1
console.log((require('fs').readFileSync('input')+'')[s='split']`\n`.map(b=>b[s]`:`[1][s]`|`).map(b=>2**(b[1][s]` `.filter(c=>c!=``?b[0].includes(` ${c} `):0).length-1)|0).reduce((a,b)=>a+b,0))

// Part 2
console.log([b=(require('fs').readFileSync('input')+'')[s='split']`\n`.map(b=>b[s]`:`[1][s]`|`).map(b=>[p=(b[1][s]` `.filter(c=>c!=``?b[0].includes(` ${c} `):0).length)|0,p>0?p:0][1]),d=[...'0'.repeat(b.length)],b.forEach((e,i)=>{for(j=0;j<e;j++)d[i+j+1]+=d[i]})][1].join``.length)