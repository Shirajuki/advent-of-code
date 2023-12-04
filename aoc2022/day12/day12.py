a=open("input").read().split("\n")
o=lambda a:ord(a.replace("S","a").replace("E","z"))
def s(st,end):
    vs={}
    q=[(0,x)for x in st]
    while len(q) > 0:
        v,d=q.pop(0)
        if d in vs:
            continue
        vs[d]=v
        x,y=d
        for dx,dy in([-1,0],[1,0],[0,-1],[0,1]):
            dx,dy=x+dx,y+dy
            d=dx,dy
            if (dx<0 or dx>len(a[0])-1 or dy<0 or dy>len(a)-1)or(o(a[dy][dx])-o(a[y][x])>1):
                continue
            if d not in vs:
                q.append((v+1,d))
    return vs[end[0]]
dat={"S":[],"E":[],"a":[]}
[[x for x,c in enumerate(r) if c in "aSE" and dat[c].append((x,y))] for y,r in enumerate(a)]
print(s(dat["S"],dat["E"]),s(dat["S"]+dat["a"],dat["E"]))
