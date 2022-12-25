w=[];d={};s=0
for l in open("input").read().split("$ "):
    if (c:=l[:2])=="cd": # Parse cwd
        w=w[:-1] if (c:=l[-3:-1])==".." else w+[c]
    else:
        b=sum([int(x) for x in l.split() if x.isdigit()]) # Sum file sizes in dir
        s+=b # Counter for total size
        [d.update({l:d.get(l,0)+b}) for l in ["/".join(w)]+["/".join(w[:-i-1]) for i in range(len(w))]] # Update size on directory and parent directories
print(sum([d[x] for x in d if d[x]<=100000]),min([d[x] for x in d if d[x]>=-4*10**7+s]))
