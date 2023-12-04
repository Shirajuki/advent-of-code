x=[list(map(int,x[:-1].replace(*",-").split("-"))) for x in open("input").readlines()]
print(sum([a<=c and b>=d or a>=c and b<=d for a,b,c,d in x]),sum([not (b<c) and not (d<a) for a,b,c,d in x]))
