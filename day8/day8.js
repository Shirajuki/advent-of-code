import fs from 'fs'
let l="length",m="map",r="reverse",f="forEach",z="slice"
let a = fs.readFileSync("input",{encoding:"utf8"}).split`\n`[m](c=>c.split``[m](n=>+n));a.pop()
let n=a[l],d={},lu=[]
// Part 1
let c=(d,a,y,ox,oy,l=0)=>{
	let m=(x,l=0)=>oy?n-x-l:x,i=-1
	a[f]((c,x)=>{if (i<c){i=c;let b=ox?m(x,l)+"."+y:m(y)+"."+m(x,l);d[b]=c}})
}
a.forEach((s,y)=>c(d,s,y,1,0)) //lr
a[m]((x)=>x[z]()[r]())[f]((s,y)=>c(d,s,y,1,1,1)) //rl
a[m]((x,i) => x[m]((_,j)=>a[j][i]))[f]((s,y)=>c(d,s,y,0,0)) //tb
a[m]((x,i)=>x[m]((_,j)=>a[j][i])[r]())[f]((s,y)=>c(d,s,n-y,0,1,1)) //bt

// Part 2
let g=(a,h)=>{
	let c=0,b=1
	a[f](s=>b&&((h>s||b--)&&c++))
	return c
}
a[f]((v,y)=>v[f]((h,x)=>{
	let b=a[m]((x,i) => x[m]((_,j)=>a[j][i]))
	lu.push(g(v[z](x+1),h)*g(v[z](0,x)[r](),h)*g(b[x][z](y+1),h)*g(b[x][z](0,y)[r](),h)) //lr*rl*tb*bt
}))
console.log(Object.keys(d).length,Math.max(...lu))
