w=[];d={};s=0
for l in open("input").read().split("$ "):
    c=l[:2]
    if c=="cd":
        c=l[-3:-1]
        w=w[:-1] if c==".." else w+[c]
    if c=="ls":
        b=sum([int(x) for x in l.split() if x.isdigit()])
        s+=b # Counter for total size
        a=["/".join(w)]+["/".join(w[:-i-1]) for i in range(len(w))] # Get directories
        [d.update({l:d.get(l,0)+b}) for l in a] # Update size on directory and parent directories
print(sum([d[x] for x in d if d[x]<=100000]),min([d[x] for x in d if d[x]>=-4*10**7+s]))
