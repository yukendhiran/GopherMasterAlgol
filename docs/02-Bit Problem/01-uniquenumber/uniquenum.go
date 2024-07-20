package main

import "fmt"

func unique(num []int) int {
	xor := 0
	for i := 0; i < len(num); i++ {
		xor ^= num[i]
	}

	return xor
}

func main() {
	num := []int{1, 2, 3, 4, 3, 2, 1}
	fmt.Println("Original Array:", num)
	fmt.Println("Unique Number:", unique(num))

}