package main

import (
	"fmt"
	"os"
	"sort"
	"strings"
)

type Monkey struct {
	items []int
	op    string
	ops   []int
	test  []int
}

func monkey(m []Monkey, r int, worry bool) int {
	insp := make([]int, len(m))
	mod := 1
	for _, monk := range m {
		mod *= monk.test[0]
	}
	for i := 0; i < r; i++ {
		for j, monk := range m {
			for _, item := range monk.items {
				nitem := item
				num := monk.ops[0]
				if len(monk.ops) == 2 {
					num = item
				}
				if monk.op == "+" {
					nitem += num
				} else {
					nitem *= num
				}
				if worry {
					nitem /= 3
				} else {
					nitem %= mod
				}
				if nitem%monk.test[0] == 0 {
					m[monk.test[1]].items = append(m[monk.test[1]].items, nitem)
				} else {
					m[monk.test[2]].items = append(m[monk.test[2]].items, nitem)
				}
				insp[j] += 1
			}
			m[j].items = []int{}
		}
	}
	sort.Ints(insp)
	return insp[len(m)-1] * insp[len(m)-2]
}

func main() {
	m := [][]Monkey{{}, {}}
	dat, err := os.ReadFile("input")
	if err != nil {
		fmt.Println(err)
	}
	s := strings.Split(string(dat), "\n\n")
	for i := 0; i < len(s); i++ {
		items := []int{}
		d := strings.Split(s[i], "\n")
		ite := strings.Split(d[1], ": ")[1]
		for _, it := range strings.Split(ite, ",") {
			var item int
			fmt.Sscan(string(it), &item)
			items = append(items, item)
		}
		var ops int
		opsies := strings.Split(strings.Split(d[2], ": ")[1], " ")
		op := opsies[3]
		fmt.Sscan(opsies[4], &ops)
		bigops := []int{ops}
		if opsies[4] == "old" {
			bigops = append(bigops, 1)
		}
		var tst int
		fmt.Sscan(strings.Split(d[3], " ")[5], &tst)
		var tru int
		fmt.Sscan(strings.Split(d[4], " ")[9], &tru)
		var fals int
		fmt.Sscan(strings.Split(d[5], " ")[9], &fals)
		test := []int{tst, tru, fals}
		m[0] = append(m[0], Monkey{items: items, op: op, ops: bigops, test: test})
		m[1] = append(m[1], Monkey{items: items, op: op, ops: bigops, test: test})
	}
	fmt.Println(monkey(m[0], 20, true), monkey(m[1], 10000, false))
}
