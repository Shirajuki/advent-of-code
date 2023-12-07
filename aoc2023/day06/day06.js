// Part 1
console.log([a=(require('fs').readFileSync('input')+'').split`\n`.map(b=>b.split`   `.slice(-4)),a[0].map((b,i)=>[...'0'.repeat(+b)].map((c,i)=>i*(b-i)).filter(c=>c>a[1][i]).length).reduce((a,b)=>a*b,1)][1])

// Part 2
console.log([a=(require('fs').readFileSync('input')+'').split`\n`.map(b=>b.split`   `.slice(-4).join``.replaceAll(' ','')),[...'0'.repeat(+a[0])].map((c,i)=>i*(a[0]-i)).filter(b=>b>a[1]).length][1])
