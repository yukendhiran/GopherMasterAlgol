package main

import (
	"fmt"
	"math"
)

// tsp -traveling-salesman-problem
func tsp(disntance [][]int, setOfcities int, city int, n int ) int{
	
	if setOfcities == (1 << n) -1 {
		return disntance[city][0]
	}

	var ans int = math.MaxInt32
	for i := 0; i < n; i++ {
		if (setOfcities & (1 << i)) == 0 {
			var newAns = disntance[city][i] + tsp(disntance, setOfcities | (1 << i), i, n)
			if ans > newAns {
				ans = newAns
			}
		}
	}
	return ans

}

func main() {
	graph := [][]int{
		{0, 10, 15, 20}, 
		{10, 0, 35, 25}, 
		{15, 35, 0, 30},
		{20, 25, 30, 0},
	}

	fmt.Println(tsp(graph, 1, 0, 4))
}