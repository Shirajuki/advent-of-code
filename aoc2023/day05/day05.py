# Part 1
print(min([a:=open('input').read().split('\n\n'),m:=[a[0].split(':')[1].split()]+[[[y:=[int(z) for z in x.split()],range(y[1],y[1]+y[2])]for x in l.split('\n')[1:]] for l in a[1:]],[[[n:=-1,[[int(o:=m[0][i])in b and [n:=a[0]+int(o)-a[1]]]for a,b in l],m[0].__setitem__(i,int(o if n<0 else n))]for l in m[1:]]for i in range(len(m[0]))],m[0]][3]))

# Part 2
print(min([[a:=open('input').read().split('\n\n'),m:=[[x:=a[0].split(':')[1].split(),[(int(x[i]),int(x[i])+int(x[i+1]))for i in range(0,len(x),2)]][1]]+[[list(map(int,x.split()))for x in line.split('\n')[1:]]for line in a[1:]]],[[w:=[],[[n:=1,[[n and [S:=max(s,b),E:=min(e,b+c),S<E and [w.append((a+S-b,a+E-b)),[S>s and m[0].append((s,S))],[E<e and m[0].append((E,e))],n:=0]]]for a,b,c in line],[n and w.append((s,e))]]for s,e in m[0]],m:=[w]+m[1:]]for line in m[1:]],m[0]][2])[0])
