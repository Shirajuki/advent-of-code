# Part 1
print(sum([[n:=[b[i]for i in range(len(b))if b[i].isdigit()],int(n[0]*2 if len(n)==1 else n[0]+n[-1])][1]for b in open('input.txt').read().split('\n')]))

# Part 2
print(sum([[[c:=['one','two','three','four','five','six','seven','eight','nine'],n:=[],[[i==b.find(d,i)and n.append(str(c.index(d)+1))or b[i].isdigit()and n.append(b[i])for d in c]for i in range(len(b))]],int(n[0]*2 if len(n)==1 else n[0]+n[-1])][1]for b in open('input.txt').read().split('\n')]))