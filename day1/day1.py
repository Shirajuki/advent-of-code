a=sorted([eval(x) for x in open("input").read()[:-1].replace("\n","+").split("++")])[-3:]
print(a[-1],sum(a))
