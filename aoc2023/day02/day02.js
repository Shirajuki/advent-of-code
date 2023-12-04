console.log((require('fs').readFileSync('input.txt')+"")[s='split']`\n`.map(a=>a[s]`:`[1][s]`;`.map(b=>[b,b[x='indexOf']('d')-5,b[x]('g')-3,b[x]('b')-3]).map(c=>c.slice(1).map(d=>d>=0?+c[0].slice(d,d+3):0)).filter(c=>c[0]>12||c[1]>13||c[2]>14)=="").reduce((d,c,i)=>d+(c?(i+1):0),0))

console.log((require('fs').readFileSync('input.txt')+"")[s='split']`\n`[l='map'](a=>a[s]`:`[1][s]`;`[l](b=>[b,b[x='indexOf']('d')-5,b[x]('g')-3,b[x]('b')-3])[l](c=>c.slice(1)[l](d=>d>=0?+c[0].slice(d,d+3):0)))[l](e=>eval([0,0,0][l]((_,i)=>Math.max(...[...e,[0,0,0]][l](r=>r[i]))).join`*`)).reduce((a,b)=>a+b,0))
